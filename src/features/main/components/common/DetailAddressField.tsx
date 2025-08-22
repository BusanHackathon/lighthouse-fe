import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared';

import { FORM_FIELDS, LABEL_TEXTS, PLACEHOLDER_TEXTS } from '../../constants';
import type { SearchAddressType } from '../../model';

export const DetailAddressField = () => {
  const form = useFormContext<SearchAddressType>();
  return (
    <FormField
      control={form.control}
      name='detailAddress'
      render={({ field }) => (
        <FormItem className='flex flex-col gap-2'>
          <FormLabel htmlFor={FORM_FIELDS.DETAIL_ADDRESS}>{LABEL_TEXTS.DETAIL_ADDRESS}</FormLabel>
          <Input {...field} placeholder={PLACEHOLDER_TEXTS.DETAIL_ADDRESS} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
