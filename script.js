let currentPokemon;

function init() {
    loadPokemon();
    includeHTML();
}

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo();

}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonID').innerHTML = `# ${currentPokemon['id']}`;
    document.getElementById('pokemonRace').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemonIMG').src = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];

}

function includeHTML() {
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function renderStats() {
    document.getElementById('details').innerHTML = '';

    const link = document.createElement('div');
    let templateToLoad = '';
    const hoveredLink = document.querySelector('#dataLinks .links:hover');

    if (hoveredLink) {
        if (hoveredLink.textContent === 'Base Stats') {
            templateToLoad = 'aboutsheet.html';
        } else if (hoveredLink.textContent === 'Evolution') {
            templateToLoad = 'evosheet.html';
        } else if (hoveredLink.textContent === 'Moves') {
            templateToLoad = 'movessheet.html';
           
        } else if (hoveredLink.textContent === 'About') {
            templateToLoad = 'datasheet.html';
        }
    }

    link.setAttribute('w3-include-html', templateToLoad);
    document.getElementById('details').appendChild(link);
    includeHTML();
}



