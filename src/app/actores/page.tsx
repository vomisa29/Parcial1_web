"use client";

import ActorLine from "@/modules/actores/ui/ActorLine";
import { useActorsServices } from "@/modules/actores/hooks/useActorsServices";

export default function ServicesPage() {
  // We use our custom hook. All the complex logic is hidden!
  const { services, isLoading, error } = useActorsServices();

  // State-based conditional rendering.
  if (isLoading) {
    return <div className="text-center p-8">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Lista Actores</h1>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.id} className="p-4 border rounded-lg shadow-sm">
            <ActorLine
            id={service.id}
            name={service.name}
            nationality={service.nationality}
            photo={service.photo}
            birthDate={service.birthDate}
            biography={service.biography}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}