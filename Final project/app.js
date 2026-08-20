import 'dotenv/config';

import path from 'node:path';
import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';

import express from 'express';
import { resolveCpuMove } from './cpu_moves/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.dirname(__filename);
const savesDir = path.join(rootDir, 'data');
const twoDGameSavePath = path.join(savesDir, '2d-game-save.json');

// Simple throttle: one CPU move request at a time to avoid rate-limit hammering
let cpuMoveInProgress = false;
const cpuMoveQueue = [];

async function processCpuMoveQueue() {
	if (cpuMoveInProgress || cpuMoveQueue.length === 0) return;
	cpuMoveInProgress = true;
	const { handler } = cpuMoveQueue.shift();
	try {
		await handler();
	} finally {
		cpuMoveInProgress = false;
		if (cpuMoveQueue.length > 0) {
			setImmediate(processCpuMoveQueue);
		}
	}
}

function withThrottle(handler) {
	return (req, res) => {
		cpuMoveQueue.push({ handler: () => handler(req, res) });
		processCpuMoveQueue();
	};
}

async function ensureSavesDirectory() {
	// Step 3.1: Create the save directory if it does not already exist.
	await fs.mkdir(savesDir, {recursive:true});
}

function isValid2dGameState(state) {
	return Boolean(
		state &&
		Array.isArray(state.board) &&
		state.board.length === 8 &&
		state.board.every((row) => Array.isArray(row) && row.length === 8) &&
		Array.isArray(state.pieces) &&
		state.pieces.length === 24 &&
		(!state.score || typeof state.score === 'object')
	);
}

app.use(express.json({ limit: '1mb' }));

// Serve all project static files under /checkers (script, styles, images, favicons).
app.use(express.static(path.join(rootDir, "public")));

app.get('/checkers', (req, res) => {
	res.redirect('/checkers/2d');
	// Step 5.1: Redirect the base checkers route to the 2D game.
});

app.get('/checkers/2d', (req, res) => {
	res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.get('/checkers/3d', (req, res) => {
	res.sendFile(path.join(rootDir, "views", "3d.html"))
	// Step 7.1: Send the 3D game HTML file.
});

app.get('/api/checkers/2d/save', async (req, res) => {
	
	try {
		const raw = await fs.readFile(twoDGameSavePath, "utf-8");
		const payload = JSON.parse(raw);
		return res.json(payload);
	} catch (error) {
		if (error.code === 'ENOENT') {
			return res.status(404).json({message: "No saved game found."});
		}
		return res.status(500).json({message: "Failed to load saved game."});
	}
});

app.post('/api/checkers/2d/save', async (req, res) => {
	
	// console.log("Hit the save route");
	const state = req.body.state;
	if (!isValid2dGameState(state)) {
		return res.status(400).json({message: "Invalid game state payload."});
	}

	const payload = {
		state: state,
		savedAt: new Date().toISOString()
	};

	try {
		await ensureSavesDirectory();
		await fs.writeFile(twoDGameSavePath, JSON.stringify(payload, null, 2), 'utf-8');
		return res.status(201).json(payload);

	} catch (error) {
		return res.status(500).json({message: "Failed to save game state."});
	}

});

app.post('/api/checkers/2d/cpu-move', withThrottle(async (req, res) => {
	// Step 10.1: Read state, legalMoves, and difficulty from the request body.
	// Step 10.2: Validate the incoming state and legal move list.
	// Step 10.3: Validate move ids so response can be checked safely.
	// Step 10.4: Call the provided CPU resolver with state, moves, difficulty, and Gemini API key.
	// Step 10.5: Accept either a moveId or from/to coordinate response.
	// Step 10.6: Return the selected move payload to the client.
	// Step 10.7: Return appropriate error codes/messages for invalid payloads or API failures.
	// console.log("Hit the CPU move");
	const { state, legalMoves, difficulty } = req.body;

	// if (difficulty === "hard") {
	// 	return res.status(500).json({ message: "Hard dificulty not implemented yet"});
	// }
	// console.log(`State:` , state)
	// console.log(`Game difficulty: ${difficulty}`);
	if (!isValid2dGameState(state) || !Array.isArray(legalMoves) || legalMoves.length === 0) {
		return res.status(400).json({message: "Invalid CPU move payload"});
	}
	//  console.log(legalMoves); 

	 const validMoveIds = new Set(legalMoves.map((move) => move.moveId));

	 try {
		const resolved = await resolveCpuMove({
			state, legalMoves, difficulty, apiKey: process.env.GEMINI_API_KEY});

		if (validMoveIds.has(resolved.moveId)) {
			return res.status(200).json({
				moveId: resolved.moveId,
				move: null,
				provider: resolved.provider,
				fallback: resolved.fallback
			});
		}

		if (resolved.move && Array.isArray(resolved.move.from) && Array.isArray(resolved.move.to)) {
			const moveId = legalMoves.find((move) =>
				move.piece?.row === resolved.move.from[0] &&
				move.piece?.col === resolved.move.from[1] &&
				move.target?.row === resolved.move.to[0] &&
				move.target?.col === resolved.move.to[1]
			)?.moveId;

			if (validMoveIds.has(moveId)) {
				return res.status(200).json({
					moveId,
					move: resolved.move,
					provider: resolved.provider,
					fallback: resolved.fallback
				});
			}
		}

		return res.status(500).json({message: "CPU returned a move that is not legal."});

	 } catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(
			`[CPU_API] Failed: statusCode=%d message=%s error=%s`,
			500,
			message,
			String(error)
		);
		return res.status(500).json({ message });

	 }
	
}));

app.get('/', (req, res) => {
	
	res.redirect('/checkers/2d');
});

app.listen(PORT, () => {
	console.log(`Checkers server running at http://localhost:${PORT}/checkers/2d (2D) and /checkers/3d (3D)`);
	console.log(`Checker game Server is running on http://localhost:${PORT}/Checkers/2d (2D) and /Checkers/3d (3D)`);
});
