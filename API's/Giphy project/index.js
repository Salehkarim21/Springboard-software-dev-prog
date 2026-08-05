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

const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  console.log("Submit!");
  getGiphy(input.value);
  input.value = '';
});                    


const removeBtn = document.querySelector("#clearGiphy");
const clearGiphy = document.querySelector("#clearGiphy");
removeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Cleared Giphy");
    clearGiphy.innerHTML = '';
    
});


