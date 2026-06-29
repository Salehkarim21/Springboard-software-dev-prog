const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {

// Normalize shift so values like 42 become 16
shiftValue = ((shiftValue % 26) + 26) % 26;

let encryptedMessage = ""; // Stores the encrypted message
let letterCounter = 0; // Counts the number of letters in the current group

// To  go through every character
for (let char of message) {

// For uppercase letters
if (char >= "A" && char <= "Z") { // Check if the character is an uppercase letter
  const base = "A".charCodeAt(0); 
  const shifted = ((char.charCodeAt(0) - base + shiftValue) % 26) + base; // Shift the character by the shift value
      encryptedMessage += String.fromCharCode(shifted); // Add the shifted character to the encrypted message
      letterCounter++; // Increment the letter counter
    }

// For lowercase letters
else if (char >= "a" && char <= "z") {
  const base = "a".charCodeAt(0);
  const shifted = ((char.charCodeAt(0) - base + shiftValue) % 26) + base;
      encryptedMessage += String.fromCharCode(shifted);
      letterCounter++;
    }
// Any other character stays the same
else { 
  encryptedMessage += char;
    }

// Insert random letter after every two letters
if (letterCounter === 2) { // If we have processed two letters insert a random letter
  
  const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; // Generate a random letter
      encryptedMessage += randomLetter; // Add the random letter to the encrypted message
      letterCounter = 0; // Reset the letter counter
    }
}

return encryptedMessage;
}


function decrypt(encryptedMessage, shiftValue) {
shiftValue = ((shiftValue % 26) + 26) % 26;
let filtered = "";
let letterCounter = 0;

// Remove inserted random letters
for (let i = 0; i < encryptedMessage.length; i++) {

if ((i % 3) !== 2) filtered += encryptedMessage[i]; // Keep all characters except every 3rd one
    }

let decryptedMessage = "";

// Shift letters backward
for (let char of filtered) {
if (char >= "A" && char <= "Z") {
  const base = "A".charCodeAt(0);
  const shifted = ((char.charCodeAt(0) - base - shiftValue + 26) % 26) + base;
      decryptedMessage += String.fromCharCode(shifted);
  }
  

else if (char >= "a" && char <= "z") {

  const base = "a".charCodeAt(0);
  const shifted = ((char.charCodeAt(0) - base - shiftValue + 26) % 26) + base;
      decryptedMessage += String.fromCharCode(shifted);
  }
else {
    decryptedMessage += char;
  }
}
    return decryptedMessage;
}