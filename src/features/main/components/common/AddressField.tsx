import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared';

import { FORM_FIELDS, LABEL_TEXTS, PLACEHOLDER_TEXTS } from '../../constants';
import { type SearchAddressType } from '../../model';

export const AddressField = () => {
  const form = useFormContext<SearchAddressType>();
  return (
    <FormField
      control={form.control}
      name='address'
      render={({ field }) => (
        <FormItem className='flex flex-col gap-2'>
          <FormLabel htmlFor={FORM_FIELDS.ADDRESS}>{LABEL_TEXTS.ADDRESS}</FormLabel>
          <Input {...field} placeholder={PLACEHOLDER_TEXTS.ADDRESS} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
