import { fetcher } from "@/shared/services/http";
import { ServiceFormData } from "@/modules/peliculas/validation/serviceSchema";
import { Service } from "@/modules/peliculas/services/moviesServices"; // Reutilizamos la interfaz

/**
 * Create a new service by sending the form data to the API.
 * @param data - The form data to create a new service validated by Zod.
 * @returns A promise that resolves with the newly created service from the backend.
 */
export const getService = (id:string): Promise<Service> => {
  return fetcher<Service>(`/movies/${id}`, {
    method: "Get", // We send the data as a JSON string
  });
};

export const createService = (data: ServiceFormData): Promise<Service> => {
  return fetcher<Service>("/movies", {
    method: "POST",
    body: JSON.stringify(data), // We send the data as a JSON string
  });
};

export const editService = (id:string, data: ServiceFormData): Promise<string> => {
  return fetcher<string>(`/movies/${id}`, {
    method: "PUT", // We send the data as a JSON string
    body: JSON.stringify(data),
  });
};

export const deleteService = (id:string): Promise<string> => {
  return fetcher<string>(`/movies/${id}`, {
    method: "DELETE", // We send the data as a JSON string
  });
};