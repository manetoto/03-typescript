import { buildCreateClient } from "./foundation-js/07-factory-functions.js";
import type { Pokemon } from "./foundation-js/08-promises-http-client.js";
import { getPokemonById } from "./foundation-js/08-promises-http-client.js";
import { getPokemonByIdAsync } from "./foundation-js/09-async-await.js";
import { getApi } from "./foundation-js/10-adapter-pattern.js";
import { getApi as getApiAxios } from "./plugins/11-axios.plugin.js";
import { calculateAge } from "./plugins/get-age.plugin.js";
import { Logger } from "./plugins/logger-winston.plugin.js";
import { generateId } from "./plugins/uuid.plugin.js";

const logger = new Logger("App");

const createClient = buildCreateClient({ generateId, calculateAge });

const client = createClient({
  name: "Ana López",
  birthdate: "1998-05-20",
  address: "Ciudad de México",
});

logger.info("Cliente creado", { client });

getPokemonById(4)
  .then((pokemon) => logger.info("Pokémon obtenido con promesa", { pokemon }))
  .catch((error: unknown) =>
    logger.error("No se pudo obtener el Pokémon con promesa", {
      error: error instanceof Error ? error.message : String(error),
    }),
  );

const showPokemon = async (): Promise<void> => {
  try {
    const pokemon = await getPokemonByIdAsync(5);
    logger.info("Pokémon obtenido con async/await", { pokemon });
  } catch (error: unknown) {
    logger.error("No se pudo obtener el Pokémon con async/await", {
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

void showPokemon();

getApi<Pokemon>("https://pokeapi.co/api/v2/pokemon/6")
  .then(({ id, name, types }) =>
    logger.info("Pokémon obtenido con adaptador fetch", {
      pokemon: { id, name, types },
    }),
  )
  .catch((error: unknown) =>
    logger.error("No se pudo obtener el Pokémon con adaptador fetch", {
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  
getApiAxios<Pokemon>("https://pokeapi.co/api/v2/pokemon/7", {
  "generacion-pokemon": "Primera",
})
  .then(({ id, name, types }) =>
    logger.info("Pokémon obtenido con adaptador Axios", {
      pokemon: { id, name, types },
    }),
  )
  .catch((error: unknown) =>
    logger.error("No se pudo obtener el Pokémon con adaptador Axios", {
      error: error instanceof Error ? error.message : String(error),
    }),
  );
