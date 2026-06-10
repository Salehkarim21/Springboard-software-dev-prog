const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS"); //will add "BRUTUS" to the beginning of the array.

guests.push("AUGUSTUS", "LUCIA"); //will add "AUGUSTUS" and "LUCIA" to the end of the array.

guests.includes("SPARTACUS"); //will check if "SPARTACUS" is in the array and return true or false.

const spartacusIndex = guests.indexOf("SPARTACUS"); //will return -1 since "SPARTACUS" it is not found in the array.

const updatedGuests = guests.splice(3,1); //will remove the element at index 3, which is "CASSIUS".

const firstFourGuests = guests.slice(0,3); //will create a new array with the first three guests, which are "BRUTUS", "ANTONY", and "CICERO".

const honoredGuests = guests.slice(0, 1); // will extract the honored guests.

const unhonoredGuests = guests.slice(1); // will extract the rest of the guests.

unhonoredGuests.sort(); // Sorts the unhonored guests.

const sortedGuests = honoredGuests.concat(unhonoredGuests); // ro combines both arrays arrange the way Caesar wanted it with Honored guest at the begining. 