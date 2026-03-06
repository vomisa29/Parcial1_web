import { z } from "zod";


export const serviceSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  poster: z
    .string()
    .min(7, { message: "La url debe tener una longitud de al menos 7 caracteres." }),
  duration: z
    .number(),
  country: z
    .string(),
  releaseDate: z
    .string()
    .min(3, { message: "La biografia debe tener una longitud de al menos 10 caracteres." }),
  popularity: z
    .number(),

});

// We create a TypeScript type from the schema to use in our components.
export type ServiceFormData = z.infer<typeof serviceSchema>;