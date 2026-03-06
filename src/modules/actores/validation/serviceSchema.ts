import { z } from "zod";

export const serviceSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  photo: z
    .string()
    .min(7, { message: "La url debe tener una longitud de al menos 7 caracteres." }),
  nationality: z
    .string()
    .min(4, { message: "El pais debe tener una longitud de al menos 10 caracteres." }),
  birthDate: z
    .string(),
  biography: z
    .string()
    .min(10, { message: "La biografia debe tener una longitud de al menos 10 caracteres." }),

});

// We create a TypeScript type from the schema to use in our components.
export type ServiceFormData = z.infer<typeof serviceSchema>;