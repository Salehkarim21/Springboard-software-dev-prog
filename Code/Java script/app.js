// alert("It's working");

// console.log("'Hello World'", 7, "test test");




// LOOPS 

// // for (let i = 1; i <= 10; i++) {
// //     console.log("Finally Hello World", i);
// // }

// for (let num = 1; num <= 20; num++) {
//     console.log(`${num}x${num}=${num * num}`);
// }

// for (let i = 200; i <= 0; i-=25) {
//     console.log('DOES IT WORK');
// } // not going to run cz it not true. because i is 200 and the condition is i <= 0 (if i is less than 200)

// console.log('AFTER THE LOOP')

// for (let i = 200; i >= 0; i-=25) {
//     console.log('IT WORKS', i);
// }


// const examScore = [98, 77, 84, 91, 57, 66]

// for (let i = 0; i < examScore.length; i++) {
//     console.log(i, examScore[i]);
// }

const myStudents = [
    {firstName : 'Alice', grade : 86
    },
    {firstName : 'Danielle', grade : 95
    },
    {firstName : 'Vanessa', grade : 82
    },              
    {firstName : 'Elena', grade : 99
    }
];

// for (let i = 0; i < myStudents.length; i++) {
//     let students = myStudents[i];
//     // console.log(students);
//     console.log(`${students.firstName}, ${students.grade}`);
// }

let total = 0;
for (let i = 0; i < myStudents.length; i++) {
    let students = myStudents[i];
    total += students.grade;
    
}
// console.log(total); // this way it will add all the grades together and get the total

// to get the average grade, you can divide the total by the number of students:
console.log(total / myStudents.length); //.lenght represents the number of students in the object.




