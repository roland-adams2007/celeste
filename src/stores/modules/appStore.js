import { create } from "zustand";
import api from "../../api/api";

export const useAppStore = create((set, get) => ({
  appData: null,
  error: null,
  loading: false,
  initialized: false,
  
  setAppData: (data) => set({ appData: data }),
  fetchAppData: async () => {
    if (get().initialized && get().appData) {
      return;
    }
    
    set({ loading: true, error: null });
    try {
      const response = await api.get("/index");
      if (response.data.success) {
        set({ 
          appData: response.data.data,
          initialized: true,
          loading: false 
        });
      } else {
        set({ 
          error: response.data.message || "Failed to fetch app data",
          loading: false 
        });
      }
    } catch (error) {
      set({ 
        error: "Failed to fetch app data",
        loading: false 
      });
    }
  },
}));