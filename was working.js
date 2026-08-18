// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

async function giphyRequest() {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}`);
    console.log(response.data);
    const img = document.querySelector("#Giphy");
  img.src = response.data.data[0].images.original.url; 
}  
  giphyRequest();

async function getGiphy(query) {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}`;
    const res = await axios.get(url);
    const img = document.querySelector("#Giphy");
    img.src = res.data.data[0].images.original.url;
  } catch (e) {
    alert("GIPHY NOT FOUND!");
    giphyRequest();
  }
}

// 1

  const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  console.log("Submit!");
  getGiphy(input.value);
  input.value = '';
})

function makeGiphyLI(giphy) {
  const newLI = document.createElement('LI');
  const Giphy = document.createElement('B');
  Giphy.innerText = giphy.title;
  newLI.append(Giphy);
  newLI.innerHTML += ` - ${giphy.images.original.url}`
  return newLI;
}


const btn = document.querySelector('#clearGiphies');
btn.addEventListener('click', clearGiphy);

function clearGiphy(giphies) {
  const ul = document.querySelector("#Giphy");
  ul.innerHTML = "";
  for (let giphy of giphies) {
    ul.append(makeGiphyLI(giphy))
  }
}




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Giphy Party</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <main>
      <h1>Giphy Party</h1>  
      <div>
        <!-- Think about placing the form here -->
        <form action="" id="searchform">
          <input type="text" id="search" placeholder="Search for GIFs">
          <button>Search</button>
        </form>

      </div>
      <div>
        <!-- Think about displaying the results here -->
        <!-- Or you can build out your own custom HTML structure -->

        
        
        <img id="Giphy" src="" alt="Giphy">
        <br>
        <button id="clearGiphies">Clear Giphy</button>
      </div>
     
    </main>
    <!-- Axios is already imported here for your convenience -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="index.js"></script>
  </body>
</html>





// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

async function giphyRequest() {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}`);
    console.log(response.data);
    const img = document.querySelector("#Giphy");
  img.src = response.data.data[0].images.original.url; 
}  
  giphyRequest();

async function getGiphy(query) {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}`;
    const res = await axios.get(url);
    const img = document.querySelector("#Giphy");
    img.src = res.data.data[0].images.original.url;
  } catch (e) {
    alert("GIPHY NOT FOUND!");
    giphyRequest();
  } 

// 1    

  const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  console.log("Submit!");
  getGiphy(input.value);
  input.value = '';
})                      

function makeGiphyLI(giphy) {
  const newLI = document.createElement('LI');
  const Giphy = document.createElement('B');
  Giphy.innerText = giphy.title;
  newLI.append(Giphy);
  newLI.innerHTML += ` - ${giphy.images.original.url}`
  return newLI;
}


const btn = document.querySelector('#clearGiphies');
btn.addEventListener('click', clearGiphy);

function clearGiphy(giphies) {
  const ul = document.querySelector("#Giphy");
  ul.innerHTML = "";
  for (let giphy of giphies) {
    ul.append(makeGiphyLI(giphy))
  }
}





// function clearGiphy() {
//   const img = document.querySelector("#Giphy");
//   img.src = "";
// }