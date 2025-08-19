import { z } from 'zod';

import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_10MB } from '../../constants';

export const realtorCertificationSchema = z.object({
  certificateFile: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE_10MB, '파일 크기는 10MB 이하여야 합니다.')
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      'PDF, JPG, PNG, WEBP 파일만 업로드 가능합니다.',
    )
    .refine((file) => file.name.trim().length > 0, '파일명이 비어있습니다.'),
});

export type RealtorCertificationFormData = z.infer<typeof realtorCertificationSchema>;
