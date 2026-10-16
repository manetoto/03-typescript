// El tipo de retorno hace explícita la estructura del resultado asíncrono.
interface Producto {
  nombre: string;
  precio: number;
}
const obtenerProducto = (): Promise<Producto> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ nombre: "Cuaderno", precio: 45 }), 1000);
  });
const mostrarProducto = async (): Promise<void> => {
  try {
    console.log("Buscando producto...");
    const producto = await obtenerProducto();
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
  } catch (error: unknown) {
    console.error("No se pudo obtener el producto:", error);
  }
};
void mostrarProducto();
