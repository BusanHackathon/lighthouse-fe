import DaumPostcode from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { MapPin } from 'lucide-react';

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
            <Button onClick={searchMap} className='w-12'>
              <MapPin className='size-4' />
            </Button>
          </div>
          <FormMessage />

          <Dialog open={isOpen} onOpenChange={closeSearch}>
            <DialogContent className='p-0 sm:max-w-md'>
              <DialogHeader className='px-6 pt-6 pb-1'>
                <DialogTitle>주소 검색</DialogTitle>
                <DialogDescription>주소를 검색하여 선택해주세요.</DialogDescription>
              </DialogHeader>
              <DaumPostcode
                onComplete={completeAddress}
                onClose={closeSearch}
                style={{ width: '100%', height: '450px' }}
              />
            </DialogContent>
          </Dialog>
        </FormItem>
      )}
    />
  );
};
