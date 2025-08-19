import { useEffect, useState } from 'react';

interface UseImagePreloadOptions {
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useImagePreload = (src: string, options: UseImagePreloadOptions = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    // 이미지가 이미 캐시에 있는 경우 즉시 로드 완료 처리
    if (img.complete) {
      setIsLoaded(true);
      options.onLoad?.();
      return;
    }

    img.onload = () => {
      setIsLoaded(true);
      options.onLoad?.();
    };

    img.onerror = () => {
      const error = new Error(`이미지 로드 실패: ${src}`);
      setError(error);
      options.onError?.(error);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options]);

  return { isLoaded, error };
};
