import { fetchInstance } from '@/shared';

export const SEARCH_PLACE_API_PATH = '/api/places/search';

export interface SearchPlaceAPIRequest {
  q: string;
  radiusKm: number;
  includeExternal: boolean;
  page: number;
  size: number;
}

export interface SearchPlaceAPIResponse {
  content: {
    placeId: number;
    landlordId: number;
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
    createdAt: string;
    updatedAt: string;
    externalProvider: string;
    externalPlaceId: string;
  }[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export const searchPlaceAPI = async ({
  q,
  radiusKm,
  includeExternal,
  page,
  size,
}: SearchPlaceAPIRequest) => {
  const response = await fetchInstance.get<SearchPlaceAPIResponse>(SEARCH_PLACE_API_PATH, {
    params: { q, radiusKm, includeExternal, page, size },
  });

  return response.data;
};
