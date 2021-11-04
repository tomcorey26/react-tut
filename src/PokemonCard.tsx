import React from 'react';
import './PokemonCard.css';
import { Pokemon } from './types';
import { capitalize } from 'lodash';

interface Move {
  name: string;
  url: string;
}

interface PokemonCardProps extends Partial<Pokemon> {}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  moves,
  name,
  sprites,
}) => {
  return (
    <div className="card">
      <div className="sprite">
        <img
          style={{ height: '90%', width: '70%', objectFit: 'contain' }}
          src={sprites?.front_shiny}
          alt=""
        />
      </div>
      <div className="info">
        <div className="def">
          <h1>{capitalize(name)}</h1>
        </div>
        <div className="moves">
          {moves?.map((m, i) =>
            i < 4 ? (
              <div
                key={m.move.name}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div key={i}>{m.move.name}</div>
                <div className="ball">20</div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
