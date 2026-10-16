// El tipo de resultado documenta qué datos devuelve el cliente HTTP.
export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}
interface PokemonResponse {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
}
export const getPokemonById = (pokemonId: number): Promise<Pokemon> =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    async (response) => {
      if (!response.ok)
        throw new Error("No se encontró información del Pokémon.");
      const { id, name, types } = (await response.json()) as PokemonResponse;
      return { id, name, types: types.map(({ type }) => type.name) };
    },
  );
