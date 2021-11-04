import React, { useEffect, useState } from 'react';
import './App.css';
import { PokemonCard } from './PokemonCard';
import { Pokemon } from './types';
// import { StaleClosure } from './StaleClosure';

const App = () => {
  const [index, setIndex] = useState<string>('1');
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    (async () => {
      let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
      let json = await data.json();
      setPokemon(json);
    })();
  }, [index]);

  return (
    <div className="App">
      <h1>{index}</h1>
      <input type="number" onChange={(e) => setIndex(e.target.value)} />
      <h1>yoyoyoyo</h1>
      {pokemon ? (
        <PokemonCard name={pokemon.name} moves={pokemon.moves} />
      ) : null}
      {/* <StaleClosure /> */}
    </div>
  );
};

export default App;
