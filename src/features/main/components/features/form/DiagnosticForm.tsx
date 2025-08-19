import { useState } from 'react';

import { Button, Input, Label, RadioGroup, RadioGroupItem } from '@/shared';

import {
  FORM_FIELDS,
  LABEL_TEXTS,
  PLACEHOLDER_TEXTS,
  RENT_TYPES,
  RENT_TYPE_CONFIG,
} from '../../../constants';
import type { RentType } from '../../../types';

export const DiagnosticForm = () => {
  const [rentType, setRentType] = useState<RentType>(RENT_TYPES.JEONSE);

  const handleRentTypeChange = (value: string) => {
    setRentType(value as RentType);
  };

  const currentRentConfig = RENT_TYPE_CONFIG[rentType];

  //TODO: 추후 Form 컴포넌트로 리팩토링
  return (
    <div className='mt-10 flex w-full flex-col items-center gap-2'>
      <div className='flex w-4/5 flex-col gap-2'>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor={FORM_FIELDS.ADDRESS} className='text-sm font-medium'>
              {LABEL_TEXTS.ADDRESS}
            </Label>
            <Input id={FORM_FIELDS.ADDRESS} placeholder={PLACEHOLDER_TEXTS.ADDRESS} />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor={FORM_FIELDS.HOUSE_TYPE} className='text-sm font-medium'>
              {LABEL_TEXTS.HOUSE_TYPE}
            </Label>
            <Input id={FORM_FIELDS.HOUSE_TYPE} placeholder={PLACEHOLDER_TEXTS.HOUSE_TYPE} />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor={FORM_FIELDS.DETAIL_ADDRESS} className='text-sm font-medium'>
              {LABEL_TEXTS.DETAIL_ADDRESS}
            </Label>
            <Input id={FORM_FIELDS.DETAIL_ADDRESS} placeholder={PLACEHOLDER_TEXTS.DETAIL_ADDRESS} />
          </div>
          <div className='flex flex-col gap-2'>
            <Label className='text-sm font-medium'>{LABEL_TEXTS.DEPOSIT}</Label>
            <RadioGroup
              value={rentType}
              onValueChange={handleRentTypeChange}
              className='flex items-center gap-4'
            >
              {Object.entries(RENT_TYPE_CONFIG).map(([value, config]) => (
                <div key={value} className='flex items-center gap-2'>
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value} className='text-sm'>
                    {config.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='relative'>
              <Input placeholder={currentRentConfig.placeholder} className='pr-12' />
              <span className='absolute top-1/2 right-4 -translate-y-1/2 transform text-sm font-semibold text-gray-600'>
                원
              </span>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <Button className='w-full'>진단하기</Button>
        </div>
      </div>
    </div>
  );
};
