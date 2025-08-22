import { create } from 'zustand';

import type { MapAddress } from '@/entities';

type MapAddressState = {
  mapAddress: MapAddress | null;

  setMapAddress: (address: MapAddress) => void;
  clearMapAddress: () => void;
  updateCoordinates: (latitude: number, longitude: number) => void;
  updateAddress: (address: string) => void;
};

export const useMapAddress = create<MapAddressState>()((set, get) => ({
  mapAddress: null,

  setMapAddress: (address: MapAddress) => {
    set({ mapAddress: address });
  },

  clearMapAddress: () => {
    set({ mapAddress: null });
  },

  updateCoordinates: (latitude: number, longitude: number) => {
    const currentAddress = get().mapAddress;
    if (currentAddress) {
      set({
        mapAddress: {
          ...currentAddress,
          latitude,
          longitude,
        },
      });
    }
  },

  updateAddress: (address: string) => {
    const currentAddress = get().mapAddress;

    if (currentAddress) {
      set({
        mapAddress: {
          ...currentAddress,
          address,
        },
      });
    }
  },
}));
