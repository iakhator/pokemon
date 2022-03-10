import { useEffect, useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Pagination from "./Pagination";
import { PokemonCard } from "./PokemonCard";
import { Modal } from "./Modal";
import {PokemonData, FetchPokemonType} from "../types/app.types"

const perPage = 16;
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export default function PokemonList() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [url, setUrl] = useState("");
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [show, setShow] = useState(false);

  const { error, loading, pokemons, totalItemCount }: FetchPokemonType = useFetchPokemon(
    url,
    offset,
    query
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    timer = setTimeout(() => {
      if (query && query.length >= 3) {
        setUrl(`${baseUrl}${query}`);
        return;
      }
    }, 3000);

    !query && setUrl(`${baseUrl}?offset=${offset}&limit=${perPage}`);

    return () => clearTimeout(timer);
  }, [query, offset]);

  const updateCurrentPage = (page: number) => {
    const offset = perPage * page - perPage;
    setOffset(offset);
    setCurrentPage(page);
  };

  const showModal = (name: string) => {
    setPokemon(pokemons.filter((pk) => name === pk.name));
    setShow(!show);
  };

  const closeModal = () => {
    setShow(!show);
    setPokemon([]);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="input_wrapper">
        <input
          name="query"
          placeholder="Search by name"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {error && <p>Sorry, there was an error fetching the data</p>}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pokemon_wrapper">
          {pokemons.length ? (
            pokemons.map((p) => (
              <PokemonCard key={p.name} p={p} showModal={showModal} />
            ))
          ) : (
            <p>No pokemon of the name {query} is found</p>
          )}
        </div>
      )}
      {pokemons.length > 0 && (
        <Pagination
          totalItems={totalItemCount}
          itemsPerPage={perPage}
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      )}

      {show && <Modal pokemon={pokemon} closeModal={closeModal} />}
    </div>
  );
}
