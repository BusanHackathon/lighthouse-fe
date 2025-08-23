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

// 카카오 REST API 응답 타입 정의
export interface KakaoRestApiAddressResult {
  meta: {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
    same_name: {
      region: string[];
      keyword: string;
      selected_region: string;
    } | null;
  };
  documents: Array<{
    address_name: string; // 지번 주소
    address_type: string; // 주소 타입 (REGION, ROAD, REGION_ADDR, ROAD_ADDR)
    x: string; // 경도
    y: string; // 위도
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
  }>;
}

/**
 * 카카오 REST API를 사용하여 주소를 지번 주소로 변환하는 함수
 * @param address 검색할 주소
 * @returns Promise<AddressSearchResult>
 */
export const convertToJibunAddress = async (address: string): Promise<AddressSearchResult> => {
  try {
    // 카카오 REST API 키는 환경변수에서 가져와야 합니다
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

    if (!REST_API_KEY) {
      return {
        success: false,
        error: '카카오 REST API 키가 설정되지 않았습니다.',
      };
    }

    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: KakaoRestApiAddressResult = await response.json();

    if (data.documents.length === 0) {
      return {
        success: false,
        error: '검색 결과가 없습니다.',
      };
    }

    const firstResult = data.documents[0];

    // address_type을 확인하여 도로명 주소인 경우에만 지번 주소로 변환
    let jibunAddress = firstResult.address_name;

    // ROAD_ADDR 또는 ROAD인 경우 지번 주소 사용
    if (firstResult.address_type === 'ROAD_ADDR' || firstResult.address_type === 'ROAD') {
      jibunAddress = firstResult.address.address_name;
    }

    const latitude = parseFloat(firstResult.y);
    const longitude = parseFloat(firstResult.x);

    return {
      success: true,
      data: {
        address: jibunAddress,
        latitude,
        longitude,
      },
    };
  } catch (error) {
    console.error('주소 변환 중 오류 발생:', error);
    return {
      success: false,
      error: '주소 변환 중 오류가 발생했습니다.',
    };
  }
};

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
        // 지번 주소를 우선적으로 사용
        const addressInfo = firstResult.address;

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
