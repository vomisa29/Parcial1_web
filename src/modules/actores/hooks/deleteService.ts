"use client"; // Hooks that use useState/useEffect should be for the client.

import { deleteService } from "@/modules/actores/services/providerService";
import { useNotificationStore } from "@/shared/store/useNotificationStore";

export function useActorsServices(id:string) {
    const showNotification = useNotificationStore(
    (state) => state.showNotification
    );

    deleteService(id);
    showNotification("Service deleted successfully", "success");
}