
async function getData() {
const response = await axios.get('https://swapi.co/api/planets/');
console.log(response);
console.log("THIS LINE IS AFTER AXIOS.GET");
}