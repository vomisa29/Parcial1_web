import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import {deleteService} from "@/modules/actores/services/providerService"


interface ActorLineProps {
  id:string;
  name: string;
  nationality: string;
  photo: string;
  birthDate: string;
  biography: string;
}

const ActorLine = ({ id, name, nationality, photo, birthDate, biography }: ActorLineProps) => {
  const router = useRouter(); 
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden  w-full">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-start-1 col-end-5">
          <Image
            src={photo}
            alt={`Foto de ${name}`}
            width={1000}
            height={1000}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="col-start-5 col-end-7">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-700">{nationality}</p>
            <p className="text-gray-700">{birthDate}</p>
          </div>
        </div>

        <div className="col-start-7 col-end-10">
          <p className="text-gray-700">{biography}</p>
          <button
            onClick={() => router.push(`/actores/services/${id}/edit`)}
            className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 disabled:bg-gray-300"
          >
            Editar
          </button>

          <button
            onClick={() => deleteService(id)}
            className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 disabled:bg-gray-300"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActorLine;