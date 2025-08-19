import { useImagePreload } from '@/shared/hooks';
import { cn } from '@/shared/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  showLoadingSkeleton?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  imgSize?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackText = '이미지 로드 실패',
  showLoadingSkeleton = true,
  onLoad,
  onError,
  imgSize,
}: OptimizedImageProps) => {
  const { isLoaded, error } = useImagePreload(src, { onLoad, onError });

  if (error) {
    return (
      <div className={cn('flex items-center justify-center text-gray-500', className)}>
        {fallbackText}
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      {!isLoaded && showLoadingSkeleton && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-full w-full animate-pulse rounded bg-gray-200' />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imgSize,
        )}
      />
    </div>
  );
};
