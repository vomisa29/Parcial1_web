import { fetcher } from "@/shared/services/http";
import { ServiceFormData } from "@/modules/actores/validation/serviceSchema";
import { Service } from "@/modules/actores/services/actorsServices"; // Reutilizamos la interfaz

/**
 * Create a new service by sending the form data to the API.
 * @param data - The form data to create a new service validated by Zod.
 * @returns A promise that resolves with the newly created service from the backend.
 */
export const createService = (data: ServiceFormData): Promise<Service> => {
  return fetcher<Service>("/actors", {
    method: "POST",
    body: JSON.stringify(data), // We send the data as a JSON string
  });
};

export const editService = (data: ServiceFormData): Promise<Service> => {
  return fetcher<Service>("/actors", {
    method: "PATCH",
    body: JSON.stringify(data), // We send the data as a JSON string
  });
};

export const deleteService = (data: ServiceFormData): Promise<Service> => {
  return fetcher<Service>("/actors", {
    method: "DELETE",
    body: JSON.stringify(data), // We send the data as a JSON string
  });
};