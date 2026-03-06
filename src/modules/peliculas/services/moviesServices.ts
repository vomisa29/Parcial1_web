import { fetcher } from "@/shared/services/http";

export interface Service {
  id:string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: string;
  popularity: string;
  "actors": [
      {
        "id": string,
        "name": string,
        "photo": string,
        "nationality": string,
        "birthDate": string,
        "biography": string
      }
    ],
  actor?:string;
  premio?:string;
}

export const fetchMoviesServices = (): Promise<Service[]> => {
  // We call the GET /services endpoint.
  // The fetcher takes care of the base URL and error handling.
  return fetcher<Service[]>("/movies");
};