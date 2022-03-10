import { useState, useEffect } from "react";
import {PokemonData, FetchPokemonType,PokemonResult, ExtractPokemonData} from '../types/app.types';

export const useFetchPokemon = (url: string, offset: number, query = ""): FetchPokemonType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [totalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setPokemons([]);
      setLoading(true);

      try {
        let promise:PokemonData[] = [];

        const res = await fetch(url);
        const data = await res.json();

        if (query) {
          promise = [extractData(data)];
          setLoading(false);
        } else {
          promise = await Promise.all(
            data.results.map(async (result: PokemonResult) => {
              const res = await fetch(result.url);
              const pokemon = await res.json();
              return extractData(pokemon);
            })
          );
          setLoading(false);
        }

        setTotalItemCount(data.count);
        setPokemons(promise);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }

    fetchData();
  }, [url, offset]);

  return { pokemons, error, loading, setLoading, totalItemCount };
};

const extractData = (data:ExtractPokemonData):PokemonData => ({
  name: data.name,
  species: data.species,
  weight: data.weight,
  types: data.types,
  stats: data.stats,
  moves: data.moves,
  imageUrl: data.sprites.front_default
});