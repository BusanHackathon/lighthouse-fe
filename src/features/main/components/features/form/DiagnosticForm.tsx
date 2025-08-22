import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from '@/shared';

import { type SearchAddressType, searchAddressSchema } from '../../../model';
import {
  AddressField,
  DepositField,
  DetailAddressField,
  HouseTypeField,
  RentTypeField,
} from '../../common';

export const DiagnosticForm = () => {
  const form = useForm<SearchAddressType>({
    resolver: zodResolver(searchAddressSchema),
    defaultValues: {
      address: '',
      houseType: '',
      detailAddress: '',
      deposit: 0,
    },
  });

  const onSubmit = (data: SearchAddressType) => {
    console.log(data);
  };

  //TODO: 추후 Form 컴포넌트로 리팩토링
  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='mt-10 flex w-full flex-col items-center gap-2'
      >
        <div className='flex w-4/5 flex-col gap-2'>
          <div className='flex w-full flex-col gap-5'>
            <AddressField />
            <HouseTypeField />
            <DetailAddressField />
            <RentTypeField />
            <DepositField />
          </div>
          <div className='py-10'>
            <Button className='w-full' onClick={form.handleSubmit(onSubmit)}>
              진단하기
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
