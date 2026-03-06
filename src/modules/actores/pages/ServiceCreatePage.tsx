"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceForm from "@/modules/actores/ui/ServiceForm";
import { ServiceFormData } from "@/modules/actores/validation/serviceSchema";
import { createService } from "@/modules/actores/services/providerService";
import { useNotificationStore } from "@/shared/store/useNotificationStore";

export default function ServiceCreatePage() {

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Get the router to redirect

  const handleCreateService = async (data: ServiceFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createService(data);
      showNotification("Service created successfully", "success");
      router.push("/actores"); // Redirect to the provider's home page
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while creating the service."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Crear Nuevo Servicio</h1>
      <ServiceForm onSubmit={handleCreateService} isSubmitting={isSubmitting} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}