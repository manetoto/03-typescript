import { v4 as uuidv4 } from "uuid";
// Adaptador para desacoplar el resto de la aplicación de uuid.
export const generateId = (): string => uuidv4();
