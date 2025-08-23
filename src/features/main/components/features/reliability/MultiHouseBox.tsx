export const MultiHouseBox = () => {
  // TODO: API 응답에 ownedUnsoldCount가 없으므로 임시로 0 표시
  const ownedUnsoldCount = 3;

  return (
    <div>
      <h1 className='text-3xl font-bold'>다주택자</h1>
      <div className='flex w-full items-end justify-center'>
        <span className='text-landlord-reliability font-bold text-blue-500'>
          {ownedUnsoldCount}
        </span>
        <span className='mb-25 text-5xl font-semibold text-black'>채</span>
      </div>
    </div>
  );
};
