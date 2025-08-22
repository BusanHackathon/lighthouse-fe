import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

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

  if (error) return <div>오류 : {error.message}</div>;

  return (
    <Map id='map' center={center} className='h-full w-full' level={3}>
      <MapMarker position={center} />
    </Map>
  );
};
