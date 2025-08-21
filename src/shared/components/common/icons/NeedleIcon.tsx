import { type SVGProps } from 'react';

type NeedleIconProps = {
  className?: string;
} & SVGProps<SVGSVGElement>;

export const NeedleIcon = ({ className = '', ...props }: NeedleIconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      {/* 바늘 몸체 (삼각형 모양) */}
      <path
        d='M12 2L14 22L10 22L12 2Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='0.5'
      />
      {/* 바늘 베이스 (원형) */}
      <circle cx='12' cy='22' r='2' fill='currentColor' />
    </svg>
  );
};
