
const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

alphabet[1].toUpperCase(); // the index of the first alpahbet of cesar's code is 1 becuase in Java Script we start counting from 0, and we need to make it uppercase.
 
const firstLetter = friend[0] + shiftValue; // to shift the value of the first letter by 3.
const encryptedFirstLetter = alphabet[firstLetter] // Need to find the letter that corresponds to the new index after shifting.


//Q2 % will help us to loop back to the beginning of the alphabet if the shift value exceeds the length of the alphabet.

const alphabetLength = alphabet.length; // length of the alphabet is 26
const firstLetter= (friend[0]+ shiftValue) % alphabetLength; // use modulo to ensure shift value is within the length of the alphabet
const encryptedFirstLetter = alphabet[firstLetter] // Need to find the letter that corresponds to the new index after shifting.


const encryptedMessage= "EUXWXV"
const slicedMessage = encryptedMessage.slice(3); // to slice the encrypted message from the 3rd index to get the last 3 letters of the encrypted message.