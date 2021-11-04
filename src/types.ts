export interface Pokemon {
  abilities: string[];
  base_experience: number;
  height: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  sprites: {
    front_shiny: string;
  };
}
