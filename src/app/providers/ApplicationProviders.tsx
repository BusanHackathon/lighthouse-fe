import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';

import { ImagePreloader, Toaster, queryClient } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const ApplicationProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <ImagePreloader />
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
      <Toaster position='top-center' richColors />
    </QueryClientProvider>
  );
};
