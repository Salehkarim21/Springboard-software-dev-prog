

let favoriteNumber = 3;
let baseURL = "http://numbersapi.com";


//geting 1 fact to start with

$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data => {
    console.log(data);
    $("body").append(`<p>${data.text}</p>`);
});

    // getting multiple numbers

let favoriteNumbers = [3, 5, 7, 9];
$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data => {
    console.log(data);
});

//get multiple facts about the same number


Promise.all(array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favoriteNumber}?json`);
})
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
