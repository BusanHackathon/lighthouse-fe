export const HEADER_TOKENS = {
  base: 'fixed top-0 right-0 left-0 z-100 flex h-header items-center border-b border-gray-200 justify-between px-header transition-colors',
  variants: {
    auth: 'bg-amber-100',
    main: 'bg-blog-gray-500',
    realtor: '', // 기본 배경색 사용
  },
} as const;
