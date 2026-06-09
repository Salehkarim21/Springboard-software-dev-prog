const randomNumber = Math.random(); // generates a random number between 0 (inclusive) and 1 (exclusive)


const range = 33-3 +1; // to calculate the range of numbers between 3 and 33, we add 1 to include both endpoints.


const randomInRange = randomNumber * range; // to scale the random number to the desired range.


const roundedRandomInteger = Math.floor(randomInRange); // to round down the decimal part of the random integer generated.
// Math.floor() rounds down the decimals into the integer while Math.round() rounds to the nearest integer.


const shiftValue = Math.floor(randomNumber * range) + 3; // to scale the random number to the desired range and shift it to start from 3.
