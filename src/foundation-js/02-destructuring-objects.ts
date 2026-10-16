// La desestructuración extrae propiedades conservando los tipos del objeto.
interface Persona {
  nombre: string;
  edad: number;
  ciudad: string;
}
const persona: Persona = { nombre: "Luis", edad: 25, ciudad: "Guadalajara" };
const { nombre, edad } = persona;
console.log(nombre, edad);
const { ciudad: lugarDeResidencia } = persona;
console.log(lugarDeResidencia);
