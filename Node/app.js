const axios = require("axios");

console.log("Hello world from Node.js runtime!");

async function getTodo() {
  try {
    console.log("Getting todos");
    const response =  await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data)
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
}

getTodo();