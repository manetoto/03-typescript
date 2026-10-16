import getAge from "get-age";
// Adaptador: expone únicamente la operación que requiere la aplicación.
export const calculateAge = (birthdate: string): number => getAge(birthdate);
