import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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

  const completeAddress = (data: AddressType) => {
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
    }

    form.setValue('address', fullAddress);
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
