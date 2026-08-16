// const axios = require("axios");

// console.log("Hello world from Node.js runtime!");

// async function getTodo() {
//   try {
//     console.log("Getting todos");
//     const response =  await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(response.data)
//     console.log("Done");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTodo();



const axios = require("axios");
const http = require("http");
const { faker } = require("@faker-js/faker");

const PORT = 8080;
const SWAPI_URL = `https://swapi.py4e.com/api`;


// const character = {
//   name: "Luke",
//   height: "6ft",
//   mass: "180lbs",
//   birth_year: "3",
//   gender: "male"
// };

// const fakeParagraph = "Some fake paragraph here...";


const server = http.createServer(async (req, res) => {
  if (req.url === "/character") {
    try {

      const randomId = Math.floor(Math.random() * 60);
      const response = await axios.get(`${SWAPI_URL}/people/${randomId}/`);
      const character = response.data;

      const fakeParagraph = faker.lorem.paragraphs(1, 3);

      res.writeHead(200, { "content-type": "text/html" });
      res.end(
        `<!DOCTYPE html>
        <html>
        <head>
          <title>Star Wars Character</title>
          <style>
            body { font-family: Arial; padding: 40px; background: #111; color: #eee; }
            h1 { color: #ffd700; }
            .card { background: #222; padding: 20px; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>Random Star Wars Character</h1>
          <p>Refresh page for a new character</p>
          <div class="card">
            <p><strong>Name:</strong> ${character.name}</p>
            <p><strong>Height:</strong> ${character.height} cm</p>
            <p><strong>Mass:</strong> ${character.mass} kg</p>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
          </div>

          <h2>Random Galactic Backstory</h2>
          <p>${fakeParagraph}</p>
          <p>Kinda bs ain't it?</p>
        </body>
        </html>
        `
      );
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "content-type": "text/html" });
      res.end("Something went wrong.....");
    }
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});