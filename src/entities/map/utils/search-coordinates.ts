// 카카오맵 API 타입 정의
declare global {
  interface Window {
    kakao: {
      maps: {
        services: {
          Geocoder: new () => {
            addressSearch: (
              address: string,
              callback: (result: KakaoGeocoderResult[], status: string) => void,
            ) => void;
          };
        };
      };
    };
  }
}

export interface KakaoGeocoderResult {
  address: {
    address_name: string;
    b_code: string;
    h_code: string;
    main_address_no: string;
    mountain_yn: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_h_name: string;
    region_3depth_name: string;
    sub_address_no: string;
    x: string;
    y: string;
  };
  road_address: {
    address_name: string;
    building_name: string;
    main_building_no: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    sub_building_no: string;
    underground_yn: string;
    x: string;
    y: string;
    zone_no: string;
  } | null;
  x: string; // 경도
  y: string; // 위도
}

export interface AddressSearchResult {
  success: boolean;
  data?: {
    address: string;
    latitude: number;
    longitude: number;
  };
  error?: string;
}

/**
 * 카카오맵 API를 사용하여 주소를 좌표로 변환하는 함수
 * @param address 검색할 주소
 * @returns Promise<AddressSearchResult>
 */
export const searchAddressToCoordinates = (address: string): Promise<AddressSearchResult> => {
  return new Promise((resolve) => {
    // 카카오맵 API가 로드되지 않은 경우
    if (!window.kakao?.maps?.services?.Geocoder) {
      resolve({
        success: false,
        error: '카카오맵 API가 로드되지 않았습니다.',
      });
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result: KakaoGeocoderResult[], status: string) => {
      if (status === 'OK' && result.length > 0) {
        const firstResult = result[0];
        const addressInfo = firstResult.road_address || firstResult.address;

        resolve({
          success: true,
          data: {
            address: addressInfo.address_name,
            latitude: parseFloat(firstResult.y),
            longitude: parseFloat(firstResult.x),
          },
        });
      } else if (status === 'ZERO_RESULT') {
        resolve({
          success: false,
          error: '검색 결과가 없습니다.',
        });
      } else {
        resolve({
          success: false,
          error: `검색 중 오류가 발생했습니다: ${status}`,
        });
      }
    });
  });
};

/**
 * 카카오맵 API 스크립트가 로드되었는지 확인하는 함수
 * @returns boolean
 */
export const isKakaoMapLoaded = (): boolean => {
  return !!window.kakao?.maps?.services?.Geocoder;
};
