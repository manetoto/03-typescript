import axios from "axios";
// Axios recibe URL y cabeceras; el adaptador entrega el cuerpo tipado.
export const getApi = async <T>(
  url: string,
  headers: Record<string, string> = {},
): Promise<T> => {
  const { data } = await axios.get<T>(url, { headers });
  return data;
};
