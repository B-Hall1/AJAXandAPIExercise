const jokeJSON = '{"setup": "Why did the chicken cross the road", "punchline": "To get to the other side"}'
const jokeJS1 = JSON.parse(jokeJSON)

p1.innerText = jokeJS1.setup

p2.innerText = jokeJS1.punchline;

function setActivity(activity) {
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
    p3.innerText = activity.type;
    p4.innerText = activity.activity;
  }
  
  async function getActivity(){
      const url = `https://www.boredapi.com/api/activity/`;
      const activity = await axios.get(url);
      console.log(activity);
      setActivity(activity.data);
  }
  
  getActivity();
  

async function activityFunc() {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      const activityJS3 = response.data;
      console.log(activityJS3);
      p5.innerText = activityJS3
      p6.innerText = activityJS3.type;

      
      
    } catch (error) {
      console.error(error);
    }
  }

async function tvMazeFunc() {
    try{
        const response = await axios.get('https://www.tvmaze.com/api/seasons/38963/episodes');
        const episode = response.data[7].name;
        p7.innerText = episode;
    }
    catch (err){
        console.log(err);
    }
}

const pokeContainer = document.querySelector('#container')

function createPokeCard (pokemon) {
    const pokeCard = document.createElement('section')
    pokeCard.classList.add('pokemon')
    pokeContainer.append(pokeCard)
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url)
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData)
}

async function getPokemon(i){
        await getPokemonData(i)
}
getPokemon(25)
