// Promise<string> expresa el tipo del valor que la promesa resolverá.
const obtenerMensaje = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve("La información llegó correctamente."), 1000);
  });
obtenerMensaje()
  .then((mensaje: string) => console.log(mensaje))
  .catch((error: unknown) => console.error("Ocurrió un error:", error));
