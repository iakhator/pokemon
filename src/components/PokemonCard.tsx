import {PokemonProps} from '../types/app.types'

export const PokemonCard = ({ p, showModal }:PokemonProps): JSX.Element => {
  const { name, imageUrl } = p;
  return (
    <div className="pokemon_card" onClick={() => showModal(name)}>
      <img src={imageUrl} alt={`pokemon_${name}`} />
      <p>{name}</p>
    </div>
  );
};
