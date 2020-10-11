import { link } from 'fs';
import React from 'react';
import './PokemonCard.css';

interface Move {
  name: string;
  url: string;
}

interface PokemonCardProps {
  name: string;
  number?: number;
  moves: Move[];
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  moves,
  name,
  number,
}) => {
  return (
    <div className="card">
      <div className="sprite"></div>
      <div className="info">
        <div className="def">
          <h1>{name}</h1>
          <h2>{number}</h2>
        </div>
        <ul>
          {moves.map((m, i) => (
            <li key={i}>{m.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
