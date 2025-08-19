import { DiagnosticForm } from '../components';

export const InputSection = () => {
  return (
    <div className='flex w-1/2 flex-col items-center justify-center gap-6 p-8'>
      <div className='flex w-full max-w-md flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <span className='flex text-3xl font-bold'>
            <p className='text-lighthouse-blue'>계약&nbsp;</p>
            <p>하려고 하는 그 집</p>
          </span>
          <span className='text-4xl font-bold'>안심할 수 있는지 확인해봐요!</span>
        </div>
        <DiagnosticForm />
      </div>
    </div>
  );
};
