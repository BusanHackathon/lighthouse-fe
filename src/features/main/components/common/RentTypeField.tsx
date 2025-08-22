import { Label, RadioGroup, RadioGroupItem } from '@/shared';

export const RentTypeField = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Label className='text-sm font-medium'>임대 유형</Label>
      <RadioGroup value='jeonse' className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <RadioGroupItem
            value='jeonse'
            id='jeonse'
            checked
            className='data-[state=checked]:border-[#8A8A8A] data-[state=checked]:before:bg-[#4353FF]'
          />
          <Label htmlFor='jeonse' className='text-sm'>
            전세
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
