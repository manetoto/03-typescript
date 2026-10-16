// El tipo genérico conserva el tipo de datos devuelto por cada API consumidora.
export const getApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("No se pudo obtener la información solicitada.");
  return (await response.json()) as T;
};
