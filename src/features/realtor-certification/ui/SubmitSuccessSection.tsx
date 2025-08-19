import { useNavigate } from 'react-router-dom';

import { Button, ROUTER_PATH } from '@/shared';

export const SubmitSuccessSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='text-2xl font-semibold'>공인중개사 인증서가 제출되었습니다!</h1>
        <p className='text-lg text-gray-500'>빠른 내부 심사 후 중개사 자격을 드릴게요!</p>
      </div>

      <Button className='h-12 w-2/3 rounded-md text-lg' onClick={() => navigate(ROUTER_PATH.MAIN)}>
        메인 화면으로 돌아가기
      </Button>
    </div>
  );
};
