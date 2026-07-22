/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user) { // The find method returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
        return user.username === username; // This line checks if the username property of the current user object matches the provided username string.
    });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    const index = usersArray.findIndex(function(user) {
        return user.username === username; 
    });
    if (index !== -1) { // The findIndex method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
        return usersArray.splice(index, 1)[0];
    }   
}