import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//fetch all pokemon data from pokeapi
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
const allPokemon = await response.json();

//convert allPokemon.results from array of objects to array of names
const pokemonNames = allPokemon.results.map((element) => element.name);


let answer = await ask("Who is your favorite pokemon?")
    
function checkPokemon(answer) {  // function to check if the answer is included in the array
    if (pokemonNames.includes(answer)) { 
      return (answer.toString())
    }
    else {
      return "Sorry, try again!"
    }
}

console.log(checkPokemon(answer))  //calls the function

process.exit();