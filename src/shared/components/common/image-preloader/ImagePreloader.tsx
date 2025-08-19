import { useEffect } from 'react';

import Logo from '@/shared/_assets/logo.webp';

import { preloadImages } from '@/shared';

export const ImagePreloader = () => {
  useEffect(() => {
    // 앱 시작 시 로고 이미지를 백그라운드에서 사전 로드
    preloadImages([Logo]);
  }, []);

  return null;
};
