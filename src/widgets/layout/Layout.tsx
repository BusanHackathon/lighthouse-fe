import { Outlet } from 'react-router-dom';

import { Footer, Header, type LayoutToFooterMap, type LayoutType, ScrollToTop } from '@/shared';

type Props = {
  layoutType: keyof LayoutType;
};

const layoutToFooterMap: LayoutToFooterMap = {
  Main: 'Main',
  Auth: 'Auth',
  Realtor: 'Main',
} as const;

export const Layout = ({ layoutType }: Props) => {
  return (
    <div className='relative flex w-full flex-col'>
      <ScrollToTop />
      <Header type={layoutType} />
      <div className='absolute top-0 left-0 flex w-full flex-1 flex-col'>
        <Outlet />
      </div>
      <Footer type={layoutToFooterMap[layoutType]} />
    </div>
  );
};
