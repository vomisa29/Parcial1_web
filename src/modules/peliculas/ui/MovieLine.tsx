import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";


interface MovieLineProps {
  id:string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: string;
  popularity: string;
  premios?:string;
  actor?:string;
}

const MovieLine = ({ id, title, poster, duration, country, releaseDate, popularity, premios,actor}: MovieLineProps) => {
  const router = useRouter(); 
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden  w-full">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-start-1 col-end-5">
          <Image
            src={poster}
            alt={`Pelicula: ${title}`}
            width={1000}
            height={1000}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="col-start-5 col-end-7">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{`Duración: ${duration}`}</p>
            <p className="text-gray-700">{`Pais de origen: ${country}`}</p>
            <p className="text-gray-700">{`Fecha de Estreno: ${releaseDate}`}</p>
            <p className="text-gray-700">{`Popularidad: ${popularity}`}</p>
          </div>
        </div>

        <div className="col-start-7 col-end-10">
          <p className="text-gray-700">{`Premios: ${premios || "N/A"}`}</p>
          <p className="text-gray-700">{`Autores: ${actor || "N/A"}`}</p>
          <button
            onClick={() => router.push(`/peliculas/services/${id}`)}
            className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 disabled:bg-gray-300"
          >
            Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieLine;