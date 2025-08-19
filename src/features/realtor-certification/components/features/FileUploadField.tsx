import { useFormContext } from 'react-hook-form';

import { FormField, FormItem, FormMessage } from '@/shared';

import { type RealtorCertificationFormData } from '../../model';
import { CustomFileUpload } from '../common';

export const FileUploadField = () => {
  const form = useFormContext<RealtorCertificationFormData>();

  return (
    <FormField
      control={form.control}
      name='certificateFile'
      render={({ fieldState: { error } }) => (
        <FormItem>
          <CustomFileUpload
            name='certificateFile'
            label='인증서 등록'
            placeholder='공인중개사 인증서 파일을 업로드하세요'
            error={error?.message}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
