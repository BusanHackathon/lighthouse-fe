import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared';

import { HOUSE_TYPE_OPTIONS, LABEL_TEXTS } from '../../constants';
import type { SearchAddressType } from '../../model';

export const HouseTypeField = () => {
  const form = useFormContext<SearchAddressType>();

  return (
    <FormField
      control={form.control}
      name='houseType'
      render={({ field }) => (
        <FormItem className='flex flex-col gap-2'>
          <FormLabel>{LABEL_TEXTS.HOUSE_TYPE}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className='w-full rounded-full border-none shadow-[0px_4px_30px_0px_#0000001A] focus-visible:border-lighthouse-blue focus-visible:shadow-lighthouse-blue-shadow [&_span]:text-input-placeholder-gray'>
                <SelectValue placeholder='주택유형을 선택해주세요' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{LABEL_TEXTS.HOUSE_TYPE}</SelectLabel>
                {HOUSE_TYPE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
