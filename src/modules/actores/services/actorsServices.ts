import { fetcher } from "@/shared/services/http";

export interface Service {
  id:string;
  name: string;
  nationality: string;
  photo: string;
  birthDate: string;
  biography: string;
  movies?:[
    {
        id:string;
        title:string;
        poster:string;
        duration:number;
        country:string;
        releaseDate:string;
        popularity:number;
    }
  ]
}

export const fetchActorsServices = (): Promise<Service[]> => {
  // We call the GET /services endpoint.
  // The fetcher takes care of the base URL and error handling.
  return fetcher<Service[]>("/actors");
};