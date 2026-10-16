import type { Pokemon } from "./08-promises-http-client.js";
interface PokemonResponse {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
}
export const getPokemonByIdAsync = async (
  pokemonId: number,
): Promise<Pokemon> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  if (!response.ok) throw new Error("No se encontró información del Pokémon.");
  const { id, name, types } = (await response.json()) as PokemonResponse;
  return { id, name, types: types.map(({ type }) => type.name) };
};
