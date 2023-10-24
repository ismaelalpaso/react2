import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [pokemon, setpokemon] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(pokemon);
      setpokemon("");
    }
  }

  return (
    <div className="search">
      <input
        value={pokemon}
        onChange={(event) => setpokemon(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Pokemon name"
        type="text"
      />
    </div>
  );
}

export default SearchBar;