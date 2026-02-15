// Pokemon Quest Assignment
const baseURL = "https://pokeapi.co/api/v2/"

const cache = {};

async function fetchPokemon(url) {
  if (url in cache) {
    return cache[url];
  } else {
    const res = await fetch(url);
    const data = await res.json();
    cache[url] = data;
    return data;
  }
}
//1
async function main() {
  const listData = await fetchPokemon(
    `${baseURL}pokemon?limit=151`
  );

  let totalHeight = 0;

  for (const pokemon of listData.results) {
    const data = await fetchPokemon(pokemon.url);
    totalHeight += data.height / 10;
  }

  const avgHeight = totalHeight / 151;
  console.log("Question: What is the average height of all Pokemon in the first generation? ");
  console.log(`Answer: ${avgHeight.toFixed(2)} m`);
  console.log("");

//2
  const fireData = await fetchPokemon(
    `${baseURL}type/fire`
  );

  let maxExp = 0;
  let bestPokemon = "";

  for (const entry of fireData.pokemon) {
    const pokemonData = await fetchPokemon(entry.pokemon.url);

    if (pokemonData.base_experience > maxExp) {
      maxExp = pokemonData.base_experience;
      bestPokemon = pokemonData.name;
    }
  }
  console.log("Question: Which Pokemon has the highest \"Base Experience\" among all Fire type Pokemon?");
  console.log(`Answer: ${bestPokemon} (${maxExp})`);
  console.log("");

  //3
  const levitateData = await fetchPokemon(
    `${baseURL}ability/levitate`
  );

  const count = levitateData.pokemon.length;
  console.log("Question: How many Pokémon have the \"Levitate\" ability?");
  console.log(`Answer: ${count}`);
  console.log("");

  //4

  // Add allListData for Q4 
  const allListData = await fetchPokemon(
    `${baseURL}pokemon?limit=1300`
  );
  const allPokemonDetails = await Promise.all(
    allListData.results.map(
      p => fetchPokemon(p.url)
    )
  );

  let maxSpeed = 0;
  let fastestPokemon = "";

  for (const data of allPokemonDetails) {

    const weightKg = data.weight / 10;
    if (weightKg < 10) {
        const speedStat = data.stats.find(
            s => s.stat.name === "speed"
        );
        const speed = speedStat.base_stat;

        if (speed > maxSpeed) {
            maxSpeed = speed;
            fastestPokemon = data.name;
        }
    }

  }
  console.log("Question: Which Pokemon has the highest \"Speed\" stat among those that weigh less than 10kg?");
  console.log("Answer:", fastestPokemon, maxSpeed);
  console.log("");


  //5 
  const electricData = await fetchPokemon(
    `${baseURL}type/electric`
  );
  let minHeight = Infinity;
  let shortestPokemon = "";
  
  for (const entry of electricData.pokemon) {
    const pokemonData = await fetchPokemon(entry.pokemon.url);
    const heightM = pokemonData.height / 10;
    if (heightM < minHeight) {
      minHeight = heightM;
      shortestPokemon = pokemonData.name;
    }
  }
  console.log("Question: Which \"Electric\" type Pokemon has the shortest height?");
  console.log(`Answer: ${shortestPokemon}`);
  console.log("");


  //6
  let maxWeight = 0;
  let heaviestPokemon = "";
  
  for (const data of allPokemonDetails) {
    const weightKg = data.weight / 10;
    if (weightKg > maxWeight) {
      maxWeight = weightKg;
      heaviestPokemon = data.name;
    }
  }
  console.log("Question: What is the heaviest Pokemon?");
  console.log(`Answer: ${heaviestPokemon}`);
  console.log("");


  //7
  let maxLength = 0;
  const longestNames = [];
  
  for (const data of allPokemonDetails) {
    const nameLength = data.name.length;
    if (nameLength > maxLength) {
      maxLength = nameLength;
      longestNames.length = 0; // Reset array
      longestNames.push(data.name);
    } else if (nameLength === maxLength) {
      longestNames.push(data.name);
    }
  }
  console.log("Question: What are the Pokemons with the longest names?");
  console.log(`Answer: ${longestNames.join(', ')}`);

}

main();
