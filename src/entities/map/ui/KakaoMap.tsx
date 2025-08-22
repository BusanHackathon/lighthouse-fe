import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

import { toast } from 'sonner';

import { Spinner } from '@/shared';

type Props = {
  lat: number;
  lng: number;
};

export const KakaoMap = ({ lat, lng }: Props) => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_API_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const center = {
    lat: lat,
    lng: lng,
  };

  if (loading) return <Spinner />;

  if (error) return toast.error(error.message);

  return (
    <Map // 지도를 표시할 Container
      id='map'
      center={center}
      className='h-full w-full'
      level={3} // 지도의 확대 레벨
    >
      <MapMarker position={center} />
    </Map>
  );
};
