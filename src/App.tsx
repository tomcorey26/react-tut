import React, { useState } from 'react';
import './App.css';
import { PokemonCard } from './PokemonCard';
// import { StaleClosure } from './StaleClosure';

const App = () => {
  const [index, setIndex] = useState<string>('1');

  return (
    <div className="App">
      <h1>{index}</h1>
      <input type="number" onChange={(e) => setIndex(e.target.value)} />
      <h1>yoyoyoyo</h1>
      <PokemonCard
        name="pikachu"
        moves={[{ name: 'thunderbolt', url: 'fdsafdas' }]}
      />
      {/* <StaleClosure /> */}
    </div>
  );
};

export default App;
