import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { convertToJibunAddress } from '@/entities';

import type { SearchAddressType } from '../model';
import type { AddressType } from '../types';

export const useAddressSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useFormContext<SearchAddressType>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const completeAddress = async (data: AddressType) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';

      // 도로명 주소인 경우 지번 주소로 변환 시도
      try {
        const jibunResult = await convertToJibunAddress(fullAddress);
        if (jibunResult.success && jibunResult.data) {
          // 지번 주소로 변환 성공 시 지번 주소 사용
          form.setValue('address', jibunResult.data.address);
        } else {
          // 변환 실패 시 원래 주소 사용
          form.setValue('address', fullAddress);
        }
      } catch (error) {
        console.error('주소 변환 중 오류:', error);
        // 오류 발생 시 원래 주소 사용
        form.setValue('address', fullAddress);
      }
    } else {
      // 지번 주소인 경우 그대로 사용
      form.setValue('address', fullAddress);
    }

    setIsOpen(false);
  };

  const openSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    completeAddress,
    openSearch,
    closeSearch,
  };
};
