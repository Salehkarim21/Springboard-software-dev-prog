

const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";



function isEncryptLetter (letter, shift) { // This function encrypts a single letter by shifting it by the specified amount
  const currentIndex = alphabet.indexOf(letter.toLowerCase()); // To find the index of the current letter in the alphabet and convert it to lowercase
  const shiftedIndex = (currentIndex + shift) % alphabet.length; // To get the index of the shifted letter
  return alphabet[shiftedIndex].toUpperCase(); // To return the encrypted letter in uppercase
}



function isEncryptMessage (word, shift) { // This function encrypts a message by shifting each letter by the specified amount
  let encryptedMessage = ""; // To store the encrypted message
  for (let i = 0; i < word.length; i++) { // To iterate through each letter in the word
    encryptedMessage += isEncryptLetter(word[i], shift); // To encrypt by moving each letter by shift value and add it to the encrypted message
  }
  return encryptedMessage; // To return the encrypted message
}



function isDecryptLetter (letter, shift) { // This function decrypts a message by shifting each letter by the specified amount
  const currentIndex = alphabet.indexOf(letter.toLowerCase()); // To find the index of the current letter in the alphabet and convert it to lowercase
  const shiftedIndex = (currentIndex - shift + alphabet.length) % alphabet.length; // To get the index of the shifted letter
  return alphabet[shiftedIndex].toUpperCase(); // To return the decrypted letter in uppercase
}

function isDecryptMessage (word, shift) { // This function decrypts a message by shifting each letter by the specified amount
  let decryptedMessage = ""; // To store the decrypted message
  for (let i = 0; i < word.length; i++) { // To iterate through each letter in the word
    decryptedMessage += isDecryptLetter(word[i], shift); // To decrypt by moving each letter by (-) shift value and add it to the decrypted message
  }
  return decryptedMessage; // To return the decrypted message
}


//Q , yes he should get the same result as the original message since we encrypted it then decrypted it.




