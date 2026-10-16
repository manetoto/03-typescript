// La factory recibe contratos de dependencias y datos del cliente tipados.
export interface ClientInput {
  name: string;
  birthdate: string;
  address: string;
}
export interface Client {
  id: string;
  name: string;
  age: number;
  address: string;
}
interface ClientDependencies {
  generateId: () => string;
  calculateAge: (birthdate: string) => number;
}
export const buildCreateClient =
  ({ generateId, calculateAge }: ClientDependencies) =>
  ({ name, birthdate, address }: ClientInput): Client => ({
    id: generateId(),
    name,
    age: calculateAge(birthdate),
    address,
  });
