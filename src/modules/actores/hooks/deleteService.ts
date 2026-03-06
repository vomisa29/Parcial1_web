"use client"; // Hooks that use useState/useEffect should be for the client.

import { deleteService } from "@/modules/actores/services/providerService";
import { useNotificationStore } from "@/shared/store/useNotificationStore";

export function useActorsServices(service:{ id:string, name:string, nationality:string, photo:string, birthDate:string, biography:string }) {
    const showNotification = useNotificationStore(
    (state) => state.showNotification
    );

    deleteService(service);
    showNotification("Service deleted successfully", "success");
}