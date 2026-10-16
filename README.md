# Node.js con TypeScript

Proyecto didáctico con ejercicios de fundamentos de JavaScript adaptados a TypeScript y una aplicación que reúne varios de esos conceptos. Incluye ejemplos de funciones, asincronía, consumo de APIs, adaptadores y dependencias externas.

## Requisitos

- Node.js 18 o posterior, para disponer de `fetch` en Node.
- npm.

## Instalación y ejecución

Instala las dependencias:

```bash
npm install
```

Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```

Este comando ejecuta `src/app.ts` con `tsx` y `nodemon` la reinicia cuando detecta cambios en archivos `.ts` de `src/`. La aplicación consulta la API pública de Pokémon para mostrar ejemplos con `fetch`, `async/await` y Axios. Necesita acceso a Internet para completar esas consultas.

Para comprobar los tipos y compilar el proyecto:

```bash
npm run build
```

El compilador limpia y genera `dist/`, incluyendo JavaScript, mapas de fuentes y declaraciones de tipos. Para compilar y ejecutar la aplicación:

```bash
npm start
```

`npm start` ejecuta primero `npm run build` y luego inicia `dist/app.js`. El logger de Winston guarda los mensajes en `logs/application.log`.

El script `npm test` todavía es un marcador y no ejecuta pruebas.

## Estructura del proyecto

- `src/app.ts`: punto de entrada de la aplicación integrada. Crea un cliente y ejecuta solicitudes a la API de Pokémon.
- `src/foundation-js/`: ejercicios independientes de fundamentos.
- `src/plugins/`: adaptadores para Axios, `get-age`, Winston y UUID.
- `src/types/get-age.d.ts`: declaración de tipos para el paquete `get-age`.
- `tsconfig.json`: configuración estricta de TypeScript; compila desde `src/` hacia `dist/` como módulos Node ESM.
- `nodemon.json`: configuración de vigilancia de archivos fuente.
- `dist/`: salida generada por `npm run build`; no se edita manualmente.

## Ejercicios

Los archivos de `src/foundation-js/` cubren, en orden:

1. Plantillas de texto.
2. Desestructuración de objetos e interfaces.
3. Callbacks y tipos de función.
4. Promesas.
5. `async/await` y tipos de retorno.
6. Funciones flecha.
7. Factory functions e inyección de dependencias.
8. Solicitudes HTTP con `fetch` y promesas.
9. Solicitudes HTTP con `fetch` y `async/await`.
10. Un adaptador genérico para consumir APIs.

En `src/plugins/` se encuentran los adaptadores de Axios (`11-axios.plugin.ts`), cálculo de edad, logging y generación de identificadores UUID. `src/app.ts` combina esos adaptadores con los ejercicios de factory y consumo HTTP.

Para ejecutar un ejercicio independiente, usa `tsx` con la ruta del archivo. Por ejemplo:

```bash
npx tsx src/foundation-js/01-string-templates.ts
```

## TypeScript durante desarrollo y compilación

`npm run dev` transpila y ejecuta el código con `tsx`, pero no realiza la comprobación de tipos. `npm run build` sí ejecuta el compilador `tsc`, valida los tipos según la configuración estricta del proyecto y genera la salida JavaScript. Las importaciones relativas usan extensión `.js` para que los módulos funcionen correctamente después de la compilación ESM.
