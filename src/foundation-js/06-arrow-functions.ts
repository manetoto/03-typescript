// Las funciones de flecha también reciben parámetros y retornos tipados.
function sumarTradicional(numero1: number, numero2: number): number {
  return numero1 + numero2;
}
const sumar = (numero1: number, numero2: number): number => numero1 + numero2;
console.log(sumarTradicional(2, 3));
console.log(sumar(2, 3));
const duplicar = (numero: number): number => numero * 2;
console.log(duplicar(4));
const saludar = (nombre: string): string => `Hola, ${nombre}`;
console.log(saludar("Sofía"));
