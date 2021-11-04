import { link } from 'fs';
import React from 'react';
import './PokemonCard.css';
import { Pokemon } from './types';

interface Move {
  name: string;
  url: string;
}

interface PokemonCardProps extends Partial<Pokemon> {}

export const PokemonCard: React.FC<PokemonCardProps> = ({ moves, name }) => {
  return (
    <div className="card">
      <div className="sprite"></div>
      <div className="info">
        <div className="def">
          <h1>{name}</h1>
        </div>
        <ul>
          {moves?.map((m, i) =>
            i < 4 ? <li key={i}>{m.move.name}</li> : null
          )}
        </ul>
      </div>
    </div>
  );
};
