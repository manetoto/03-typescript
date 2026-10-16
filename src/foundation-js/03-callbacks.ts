// Un callback permite pasar una función como argumento a otra función.
type Saludo = (nombre: string) => void;
function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}
function procesarUsuario(nombre: string, callback: Saludo): void {
  console.log("Procesando usuario...");
  callback(nombre);
}
procesarUsuario("María", saludar);
