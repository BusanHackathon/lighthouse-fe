import { type RefObject } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { Button, Form } from '@/shared';

import { diagnosisApi } from '../../../apis';
import { type SearchAddressType, searchAddressSchema } from '../../../model';
import { useHouseData } from '../../../store';
import { extractDongAddress } from '../../../utils/address-utils';
import { AddressField, ScaleBandField } from '../../common';

type Props = {
  scrollToRiskAnalysis: RefObject<HTMLDivElement>;
};

export const DiagnosticForm = ({ scrollToRiskAnalysis }: Props) => {
  const { setDiagnosisData } = useHouseData();

  const form = useForm<SearchAddressType>({
    resolver: zodResolver(searchAddressSchema),
    defaultValues: {
      address: '',
      scale: '',
    },
  });

  const { mutate: diagnosisMutate } = useMutation({
    mutationFn: (data: SearchAddressType) => {
      // 전체 주소에서 동까지만 추출
      const dongAddress = extractDongAddress(data.address);

      return diagnosisApi({
        address: dongAddress, // 동까지만 서버에 전송
        scale: data.scale, // 규모 정보 전송
      });
    },
    onSuccess: (data) => {
      setDiagnosisData(data);

      console.log(data);

      // 진단 완료 후 위험도 분석 섹션으로 스크롤
      setTimeout(() => {
        if (scrollToRiskAnalysis.current) {
          const element = scrollToRiskAnalysis.current;
          const elementTop = element.offsetTop;
          const offset = 80;

          window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    },
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
            <ScaleBandField />
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
