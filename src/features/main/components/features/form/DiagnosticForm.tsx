import { useState } from 'react';

import { Button, Input, Label, RadioGroup, RadioGroupItem } from '@/shared';

export const DiagnosticForm = () => {
  const [rentType, setRentType] = useState<'jeonse' | 'monthly'>('jeonse');

  //TODO: 추후 Form 컴포넌트로 리팩토링
  return (
    <div className='mt-10 flex w-full flex-col items-center gap-2'>
      <div className='flex w-4/5 flex-col gap-2'>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='address' className='text-sm font-medium'>
              주소
            </Label>
            <Input id='address' placeholder='주소를 알려주세요' />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='house-type' className='text-sm font-medium'>
              주택유형
            </Label>
            <Input id='house-type' placeholder='주택유형을 알려주세요' />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='detail-address' className='text-sm font-medium'>
              상세주소
            </Label>
            <Input id='detail-address' placeholder='상세주소를 알려주세요.' />
          </div>
          <div className='flex flex-col gap-2'>
            <Label className='text-sm font-medium'>보증금</Label>
            <RadioGroup
              value={rentType}
              onValueChange={(value) => setRentType(value as 'jeonse' | 'monthly')}
              className='flex items-center gap-4'
            >
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='jeonse' id='jeonse' />
                <Label htmlFor='jeonse' className='text-sm'>
                  전세
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='monthly' id='monthly' />
                <Label htmlFor='monthly' className='text-sm'>
                  월세
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='relative'>
              <Input
                placeholder={rentType === 'jeonse' ? '전세금액' : '월세금액'}
                className='pr-12'
              />
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
