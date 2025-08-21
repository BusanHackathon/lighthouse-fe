import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/shared';

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

export const Pagination = ({ currentPage, setCurrentPage, totalPages }: Props) => {
  return (
    <div className='mt-6 flex items-center justify-center gap-2'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='size-8 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50'
      >
        <ChevronLeftIcon className='size-4' />
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          variant='ghost'
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`size-8 rounded-full ${
            currentPage === page
              ? 'bg-lighthouse-blue text-white'
              : 'text-[#6B7684] hover:bg-[#E6E8EA]'
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        variant='ghost'
        size='icon'
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='size-8 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50'
      >
        <ChevronRightIcon className='size-4' />
      </Button>
    </div>
  );
};
