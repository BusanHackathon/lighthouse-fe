import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { type AddressSearchResult, searchAddressToCoordinates } from '@/shared';

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
      const result = await searchAddressToCoordinates(address);
      setSearchResult(result);

      if (result.success && result.data) {
        setMapAddress({
          address: result.data.address,
          latitude: result.data.latitude,
          longitude: result.data.longitude,
        });
      }
    } catch {
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
