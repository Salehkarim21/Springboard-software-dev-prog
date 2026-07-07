function countDown(num) {
    console.log(num)

let timer = setInterval(function() {
   num--; // Decrement the number by 1
   if (num <= 0) {
      clearInterval(timer); // Stop the timer when the number reaches 0
      console.log("DONE!"); // Log "DONE!" to the console
   }
}, 1000) //this will run the function every 1000 milliseconds (1 second)
}



function randomeGame() {
    let num;
    let counter = 0;
    let timer = setInterval(function() { 
        num = Math.random(); // Generate a random number between 0 and 1
        counter++; // Increment the counter for each random number generated
        if (num === 0.75) { // Check if the random number is equal to 0.75
            clearInterval(timer); // Stop the timer when the random number is 0.75
            console.log(`It took ${counter} tries to get this number`);
        }
    }, 1000);
}
