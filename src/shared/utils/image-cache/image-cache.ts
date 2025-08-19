class ImageCache {
  private cache = new Map<string, HTMLImageElement>();

  preloadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      // 이미 캐시에 있는 경우
      if (this.cache.has(src)) {
        const cachedImage = this.cache.get(src)!;
        if (cachedImage.complete) {
          resolve(cachedImage);
          return;
        }
      }

      const img = new Image();

      img.onload = () => {
        this.cache.set(src, img);
        resolve(img);
      };

      img.onerror = () => {
        reject(new Error(`이미지 로드 실패: ${src}`));
      };

      img.src = src;
    });
  }

  isCached(src: string): boolean {
    return this.cache.has(src) && this.cache.get(src)!.complete;
  }

  getCachedImage(src: string): HTMLImageElement | null {
    return this.cache.get(src) || null;
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const imageCache = new ImageCache();

// 여러 이미지를 동시에 사전 로드하는 함수
export const preloadImages = async (srcs: string[]): Promise<void> => {
  try {
    await Promise.all(srcs.map((src) => imageCache.preloadImage(src)));
  } catch (error) {
    console.warn('일부 이미지 사전 로드 실패:', error);
  }
};
