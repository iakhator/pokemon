export interface PaginationType {
  itemsPerPage: number
  currentPage: number
  totalItems: number
  updateCurrentPage: (page: number) => void
}

export interface PokemonType {
  name: string
  imageUrl: string
}

export interface Types{
  type: {
    name: string
  }
}

export interface Moves{
  move: {
    name: string
  }
}

export interface Stats{
  stat: {
    name: string
  }
}

export interface Species{
  name: string
}

export interface Sprites {
    front_default: string
}

export interface PokemonData {
  name: string;
  imageUrl: string;
  species: Species;
  types: Types[]
  moves: Moves[]
  weight: number
  stats: Stats[]
}

export interface ExtractPokemonData extends Omit<PokemonData, 'imageUrl'> {
  sprites: Sprites;
}

export interface FetchPokemonType {
  pokemons: PokemonData[];
  error: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  totalItemCount: number;
}

export interface PokemonResult {
  name: string;
  url: string
}

// props type
export interface PokemonProps {
  p: PokemonType;
  showModal: (name: string) => void;
}

export interface ModalProps {
  closeModal: () => void;
  pokemon: PokemonData[];
}
