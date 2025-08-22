import { z } from 'zod';

export const searchAddressSchema = z.object({
  address: z.string().min(1, { message: '주소를 입력해주세요.' }),
  houseType: z.string().min(1, { message: '주거형태를 선택해주세요.' }),
  detailAddress: z.string().min(1, { message: '상세주소를 입력해주세요.' }),
  deposit: z.number().min(1, { message: '보증금을 입력해주세요.' }),
});

export type SearchAddressType = z.infer<typeof searchAddressSchema>;
