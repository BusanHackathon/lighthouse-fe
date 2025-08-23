import { z } from 'zod';

export const searchAddressSchema = z.object({
  address: z.string().min(1, { message: '주소를 입력해주세요.' }),
  scale: z.string(),
});

export type SearchAddressType = z.infer<typeof searchAddressSchema>;
