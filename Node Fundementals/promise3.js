
$(function() {
    let baseURL = 'https://pokeapi.co/api/v2';


//1 single req

    $.getJSON(`${baseURL}/pokemon/?limit=1351`).then(data => {
        console.log(data);
    });

//2 get multiple pokemon

    $.getJSON(`${baseURL}/pokemon/?limit=1351`)
    .then(data => {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
            let randomIdx = Math.floor(Math.random() * data.results.length);
            let url = data.results.splice(randomIdx, 1)[0].url;
            randomPokemonUrls.push(url);
        }
        return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
    })
    .then(pokemon => {
        pokemon.forEach(p => console.log(p));
    });

//3 get pokemon descriptions

    let names = null;
    $.getJSON(`${baseURL}/pokemon/?limit=1351`)
    .then(data => {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
            let randomIdx = Math.floor(Math.random() * data.results.length);
            let url = data.results.splice(randomIdx, 1)[0].url;
            randomPokemonUrls.push(url);
        }
        return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
    })
    .then(data => {
        names = data.map(d => d.name);
        return Promise.all(data.map(d => $.getJSON(d.species.url)))
    })
    .then(data => {
        let descriptions = data.map(d => {
            let descriptionObj = d.flavor_text_entries.find(
                entry => entry.language.name === "en"
            );
            return descriptionObj ? descriptionObj.flavor_text : "No description available."; 
        });
        descriptions.forEach((des, i) => {
            console.log(`${names[i]}: ${des}`);
        });
    });

//4
    let $btn = $('button');
    let $pokeArea = $('#pokemon-area');
    $btn.on('click', function() {
        $pokeArea.empty();
    
        $.getJSON(`${baseURL}/pokemon/?limit=1351`)
        .then(data => {
            let randomPokemonUrls = [];
            for (let i = 0; i < 3; i++) {
                let randomIdx = Math.floor(Math.random() * data.results.length);
                let url = data.results.splice(randomIdx, 1)[0].url;
                randomPokemonUrls.push(url);
            }
            return Promise.all(randomPokemonUrls.map(url => $.getJSON(url)));
        })
        .then(pokemonInfo => {
            namesAndImages = pokemonInfo.map(p => ({ name: p.name, image: p.sprites.front_default }));
            return Promise.all(pokemonInfo.map(p => $.getJSON(p.species.url)));
        })
        .then(speciesInfo => {
             speciesInfo.map((d, i) => {
                let descriptionObj = d.flavor_text_entries.find(function(entry) {
                    return entry.language.name === "en";
                });

                let description = descriptionObj ? descriptionObj.flavor_text : "";
                let { name, image } = namesAndImages[i];
                $pokeArea.append(makePokeCard(name, image, description));
            });
        });   
    });
    function makePokeCard(name, imgSrc, description) {
    return `
      <div class="card">
        <h1>${name}</h1>
        <img src=${imgSrc} />
        <p>${description}</p>
      </div>
    `;
  }
});