import { useEffect, useState } from 'react';

interface UseImagePreloadOptions {
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useImagePreload = (src: string, options: UseImagePreloadOptions = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { onLoad, onError } = options;

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    if (img.complete) {
      setIsLoaded(true);
      onLoad?.();
      return;
    }

    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      const error = new Error(`이미지 로드 실패: ${src}`);
      setError(error);
      onError?.(error);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return { isLoaded, error };
};
