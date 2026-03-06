"use client";

import { Service } from "../services/actorsServices";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ServiceFormData } from "@/modules/actores/validation/serviceSchema";
import { editService } from "@/modules/actores/services/providerService";
import { useNotificationStore } from "@/shared/store/useNotificationStore";
import ServiceFormEdit from "../ui/ServiceEditForm";

type Props = {
  service: Service;
};

export default function ServiceEditPage({ service }: Props) {

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Get the router to redirect

  const handleEditService = async (data: ServiceFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await editService(service.id, data);
      showNotification("Service edited successfully", "success");
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
      <h1 className="text-3xl font-bold mb-6">Editar Actor</h1>
      <ServiceFormEdit onSubmit={handleEditService} isSubmitting={isSubmitting} service={service}/>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}