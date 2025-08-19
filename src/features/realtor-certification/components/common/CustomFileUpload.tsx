import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/shared';

import { type RealtorCertificationFormData } from '../../model';

interface CustomFileUploadProps {
  name: keyof RealtorCertificationFormData;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
}

export const CustomFileUpload = ({
  name,
  label,
  placeholder = '파일을 선택하거나 여기에 드래그하세요',
  className,
  disabled,
  error,
}: CustomFileUploadProps) => {
  const form = useFormContext<RealtorCertificationFormData>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateFile = (file: File | null) => {
    form.setValue(name, file as RealtorCertificationFormData[keyof RealtorCertificationFormData]);
    form.trigger(name);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    updateFile(file);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');

    const file = event.dataTransfer.files[0] || null;
    updateFile(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const selectedFile = form.watch(name) as File | null;

  return (
    <div className={cn('w-full', className)}>
      {label && <label className='mb-2 block text-lg font-medium text-gray-700'>{label}</label>}

      <div
        className={cn(
          'relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:border-gray-400 hover:bg-gray-100',
          error && 'border-red-300 bg-red-50',
          disabled && 'cursor-not-allowed opacity-50',
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!disabled ? handleClick : undefined}
      >
        <input
          ref={fileInputRef}
          type='file'
          accept='.pdf,.jpg,.jpeg,.png,.webp'
          onChange={handleInputChange}
          className='hidden'
          disabled={disabled}
        />

        {selectedFile ? (
          <div className='flex flex-col items-center gap-2 text-center'>
            <div className='rounded-full bg-green-100 p-3'>
              <svg
                className='size-10 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <div>
              <p className='text-sm font-medium text-gray-700'>{selectedFile.name}</p>
              <p className='text-sm text-gray-500'>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <p className='text-sm text-gray-400'>클릭하여 다른 파일 선택</p>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-2 text-center'>
            <div className='rounded-full bg-gray-200 p-5'>
              <svg
                className='size-10 text-gray-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
            </div>
            <div className='flex flex-col gap-2 py-3'>
              <p className='text-md flex gap-1 font-medium text-gray-700'>
                <span className='text-blue-600 hover:text-blue-500'>클릭하여 파일 선택</span>
                <span className='text-gray-500'>또는 드래그 앤 드롭</span>
              </p>
              <p className='text-sm text-gray-500'>{placeholder}</p>
            </div>
            <div className='text-sm text-gray-400'>지원 형식: PDF, JPG, PNG, WEBP (최대 10MB)</div>
          </div>
        )}
      </div>

      {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
    </div>
  );
};
