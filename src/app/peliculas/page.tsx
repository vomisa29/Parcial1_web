"use client";

import MovieLine from "@/modules/peliculas/ui/MovieLine";
import { useMoviesServices } from "@/modules/peliculas/hooks/useMoviesServices";

export default function ServicesPage() {
  // We use our custom hook. All the complex logic is hidden!
  const { services, isLoading, error } = useMoviesServices();

  // State-based conditional rendering.
  if (isLoading) {
    return <div className="text-center p-8">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Lista Peliculas</h1>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.id} className="p-4 border rounded-lg shadow-sm">
            <MovieLine
            id={service.id}
            title={service.title}
            poster={service.poster}
            duration={service.duration}
            country={service.country}
            releaseDate={service.releaseDate}
            popularity={service.popularity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}