import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar";
import PokemonInfo from "./components/pokemonInfo";

function App() {
  const [data, setData] = useState({});

  const searchPokemon = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="app">
      <SearchBar onSearch={searchPokemon} />
      {Object.keys(data).length > 0 && <PokemonInfo data={data} />}
    </div>
  );
}

export default App;
