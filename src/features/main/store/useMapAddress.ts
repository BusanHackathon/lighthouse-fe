import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { MapAddress } from '@/entities';

type MapAddressState = {
  mapAddress: MapAddress | null;

  setMapAddress: (address: MapAddress) => void;
  clearMapAddress: () => void;
  updateCoordinates: (latitude: number, longitude: number) => void;
  updateAddress: (address: string) => void;
};

export const useMapAddress = create<MapAddressState>()(
  devtools(
    (set, get) => ({
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
    }),
    {
      name: 'map-address-store', // Redux DevTools에서 표시될 이름
    },
  ),
);
