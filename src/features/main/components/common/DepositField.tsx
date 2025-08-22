import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormMessage, Input } from '@/shared';

import { PLACEHOLDER_TEXTS } from '../../constants';
import type { SearchAddressType } from '../../model';

export const DepositField = () => {
  const form = useFormContext<SearchAddressType>();

  const convertToNumber = (value: string, onChange: (value: number) => void) => {
    const numValue = value === '' ? 0 : Number(value);
    const safeValue = isNaN(numValue) ? 0 : numValue;
    onChange(safeValue);
  };

  const getDisplayValue = (value: number) => {
    return value === 0 ? '' : String(value);
  };

  return (
    <FormField
      control={form.control}
      name='deposit'
      render={({ field }) => (
        <FormItem className='flex flex-col gap-2'>
          <div className='relative'>
            <Input
              {...field}
              placeholder={PLACEHOLDER_TEXTS.DEPOSIT}
              onChange={(e) => convertToNumber(e.target.value, field.onChange)}
              value={getDisplayValue(field.value)}
            />
            <span className='absolute top-1/2 right-4 -translate-y-1/2 transform text-sm font-semibold text-[#333D4B]'>
              원
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
