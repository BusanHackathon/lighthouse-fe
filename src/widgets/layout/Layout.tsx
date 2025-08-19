import { Outlet, useMatches } from 'react-router-dom';

import { Header, type LayoutType, ScrollToTop } from '@/shared';

type PageHandle = {
  layout?: keyof LayoutType;
};

export const Layout = () => {
  const matches = useMatches();

  const handle = matches[matches.length - 1]?.handle as PageHandle | undefined;
  const layoutType = handle?.layout || 'Main'; // 기본값으로 'Main' 사용

  return (
    <div className='w-full'>
      <Header type={layoutType} />
      <main className='pt-header'>
        <div className='flex flex-1 flex-col'>
          <div className='mb-footer flex-grow'>
            <ScrollToTop />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
