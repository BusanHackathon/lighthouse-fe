import DaumPostcode from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

import { MapPin, X } from 'lucide-react';

import { Button, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared';

import { FORM_FIELDS, LABEL_TEXTS, PLACEHOLDER_TEXTS } from '../../constants';
import { useAddressSearch, useKakaoAddressSearch } from '../../hooks';
import { type SearchAddressType } from '../../model';

export const AddressField = () => {
  const { isOpen, completeAddress, openSearch, closeSearch } = useAddressSearch();
  const { searchAddress } = useKakaoAddressSearch();

  const form = useFormContext<SearchAddressType>();

  const searchMap = () => {
    const address = form.getValues('address');

    if (address && address.trim().length > 0) {
      // 카카오맵 API로 주소 검색
      searchAddress();
    }
  };

  return (
    <FormField
      control={form.control}
      name='address'
      render={({ field }) => (
        <FormItem className='flex flex-col gap-2'>
          <FormLabel htmlFor={FORM_FIELDS.ADDRESS}>{LABEL_TEXTS.ADDRESS}</FormLabel>
          <div className='flex items-center gap-2'>
            <Input
              {...field}
              placeholder={PLACEHOLDER_TEXTS.ADDRESS}
              readOnly
              onClick={openSearch}
              className='cursor-pointer'
            />
            <Button type='button' onClick={searchMap} className='w-12'>
              <MapPin className='size-4' />
            </Button>
          </div>
          <FormMessage />

          {isOpen && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
              <div className='mx-4 w-full max-w-md rounded-lg bg-white'>
                <div className='scrollbar-hide flex items-center justify-between border-b py-3 pr-2 pl-5'>
                  <h3 className='text-lg font-semibold'>주소 검색</h3>
                  <Button
                    type='button'
                    variant='ghost'
                    onClick={closeSearch}
                    className='text-gray-500 hover:text-gray-700'
                  >
                    <X className='size-5' />
                  </Button>
                </div>
                <DaumPostcode
                  onComplete={completeAddress}
                  onClose={closeSearch}
                  style={{ width: '100%', height: '400px' }}
                />
              </div>
            </div>
          )}
        </FormItem>
      )}
    />
  );
};
