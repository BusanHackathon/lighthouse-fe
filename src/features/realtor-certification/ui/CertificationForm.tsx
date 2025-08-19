import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from '@/shared';

import { FileUploadField } from '../components';
import { type RealtorCertificationFormData, realtorCertificationSchema } from '../model';

import { SubmitSuccessSection } from './SubmitSuccessSection';

type props = {
  onSuccess?: () => void;
};

export const CertificationForm = ({ onSuccess }: props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<RealtorCertificationFormData>({
    resolver: zodResolver(realtorCertificationSchema),
    defaultValues: {
      certificateFile: undefined,
    },
  });

  const onSubmit = async (data: RealtorCertificationFormData) => {
    try {
      // TODO: API 호출 로직 구현
      console.log('제출할 데이터:', data);

      // API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 제출 성공 시 상태 변경
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error('제출 실패:', error);
      // TODO: 에러 처리 로직
    }
  };

  if (isSubmitted) {
    return <SubmitSuccessSection />;
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='space-y-6'>
          <FileUploadField />
          <Button
            onClick={form.handleSubmit(onSubmit)}
            type='submit'
            className='h-12 w-full rounded-md text-lg'
            disabled={!form.formState.isValid}
          >
            제출하기
          </Button>
        </div>
      </form>
    </Form>
  );
};
