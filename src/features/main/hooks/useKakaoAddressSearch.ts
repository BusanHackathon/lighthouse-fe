import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  type AddressSearchResult,
  convertToJibunAddress,
  searchAddressToCoordinates,
} from '@/entities';

import { type SearchAddressType } from '../model';
import { useMapAddress } from '../store';

export const useKakaoAddressSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<AddressSearchResult | null>(null);

  const { setMapAddress } = useMapAddress();

  const form = useFormContext<SearchAddressType>();
  const address = form.watch('address');

  const searchAddress = async () => {
    if (!address || address.trim().length === 0) {
      setSearchResult({
        success: false,
        error: '주소를 입력해주세요.',
      });
      return;
    }

    setIsSearching(true);
    setSearchResult(null);

    try {
      // 먼저 카카오 REST API를 사용하여 지번 주소로 변환 시도
      const jibunResult = await convertToJibunAddress(address);

      if (jibunResult.success && jibunResult.data) {
        // 지번 주소 변환 성공 시 지번 주소로 폼 업데이트
        form.setValue('address', jibunResult.data.address);

        setSearchResult(jibunResult);
        setMapAddress({
          address: jibunResult.data.address,
          latitude: jibunResult.data.latitude,
          longitude: jibunResult.data.longitude,
        });
      } else {
        // 지번 주소 변환 실패 시 기존 방식으로 좌표 검색
        const result = await searchAddressToCoordinates(address);
        setSearchResult(result);

        if (result.success && result.data) {
          setMapAddress({
            address: result.data.address,
            latitude: result.data.latitude,
            longitude: result.data.longitude,
          });
        }
      }
    } catch (error) {
      console.error('주소 검색 중 예기치 않은 오류 발생:', error);

      setSearchResult({
        success: false,
        error: '주소 검색 중 오류가 발생했습니다.',
      });
    } finally {
      setIsSearching(false);
    }
  };

  return {
    searchAddress,
    isSearching,
    searchResult,
    address,
  };
};
