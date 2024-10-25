// PROBLEMES AVEC JAVA PAR RAPPORT A L'IMPORT DE LA LIBRAIRIE ET MON PYTHON N'EST PAS BIEN INSTALLE
// J'AI DONC ESSAYE EN JS


const data = require('./pokemon.json');
const pokemon = data.pokemon;
// console.log(pokemon)


function nbPokemon() {
    const nbPokemon = pokemon.length;
    return nbPokemon
}
// console.log(nbPokemon())

function over10kgPokemon() {
    const over10pkm = pokemon.filter(pokemon => {
        const weight = parseFloat(pokemon.weight);
        return weight > 10;
    });

    return over10pkm;
}

// console.log(over10kgPokemon())

function increasedWeigth() {
    const weightpkm = pokemon.filter(pokemon => {
        const weight = parseFloat(pokemon.weight);
        return weight;
    });
    weightpkm.sort(function (a, b) { return a - b })
    return weightpkm
}

// console.log(increasedWeigth())