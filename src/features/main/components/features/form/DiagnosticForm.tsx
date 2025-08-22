import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { Button, Form } from '@/shared';

import { diagnosisApi } from '../../../apis';
import { type SearchAddressType, searchAddressSchema } from '../../../model';
import type { HouseType } from '../../../types';
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

  const { mutate: diagnosisMutate } = useMutation({
    mutationFn: (data: SearchAddressType) =>
      diagnosisApi({
        address: data.address,
        addressDetail: data.detailAddress,
        houseType: data.houseType as HouseType,
        deposit: data.deposit,
      }),
  });

  const onSubmit = (data: SearchAddressType) => {
    diagnosisMutate(data);
  };

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
