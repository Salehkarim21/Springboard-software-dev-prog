
const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";


let encrypted = "";
for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i]; // Get the current letter from the friend's name
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase()); // To find the index of the current letter in the alphabet and convert it to lowercase
  const shiftedIndex = (currentIndex + shiftValue) % alphabet.length; // To get the index of the shifted letter
  const encryptedLetter = alphabet[shiftedIndex].toUpperCase(); // to get the encrypted letter from the alphabet and convert it to uppercase
  encrypted += encryptedLetter; // to add the encrypted letter to the encrypted string
}
console.log(encrypted); // Print the encrypted name


// Q 1 using the loop will automate the encryption process for each letter in the friend's name.

// Q 2 % alphabet.length ensures that the shifted index wraps around to the beginning of the alphabet if it goes past the end.
