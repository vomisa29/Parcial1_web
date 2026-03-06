"use client"; // Hooks that use useState/useEffect should be for the client.

import { deleteService } from "@/modules/actores/services/providerService";
import { useNotificationStore } from "@/shared/store/useNotificationStore";

export function useActorsServices(id:string) {
    function refreshPage(){
        window.location.reload();
    }
    const showNotification = useNotificationStore(
    (state) => state.showNotification
    );

    deleteService(id);
    refreshPage();
    showNotification("Service deleted successfully", "success");

}