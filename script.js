let currentPokemon;

function init(){
    loadPokemon();
}

async function loadPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    let response = await fetch(url);
    currentPokemon = await response.json();

    /**console.log('Loaded Pokemon',currentPokemon);**/

    renderPokemonInfo();

}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonID').innerHTML = `# ${currentPokemon['id']}`;
    document.getElementById('pokemonRace').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemonIMG').src = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];
    
        
}
