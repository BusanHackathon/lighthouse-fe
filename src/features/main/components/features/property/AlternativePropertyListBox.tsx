import { useState } from 'react';

import HomeIcon from '../../../_assets/Home.webp';
import type { AlternativeProperty } from '../../../types';
import { Pagination } from '../../common';

type Props = {
  properties: AlternativeProperty[];
  title: string;
};

export const AlternativePropertyListBox = ({ properties, title }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  const getRiskGradeColor = (grade: string) => {
    switch (grade) {
      case '안전':
        return '#10B981'; // green-500
      case '주의':
        return '#F59E0B'; // amber-500
      case '위험':
        return '#EF4444'; // red-500
      default:
        return '#6B7280'; // gray-500
    }
  };

  return (
    <div className='w-full rounded-lg bg-white p-6'>
      <h3 className='mb-4 text-2xl font-bold text-gray-900'>{title}</h3>

      <div className='space-y-4'>
        {currentProperties.map((property) => (
          <div key={property.placeId} className='flex items-start justify-center gap-3'>
            <img src={HomeIcon} alt='home' className='mt-1 h-[19px] w-[15px]' />

            <div className='flex flex-1 flex-col gap-1'>
              {/* 매물 타입 라벨 */}
              <div className='flex items-center gap-3'>
                <span
                  className='flex h-6 w-16 items-center justify-center rounded-xs text-sm font-medium text-white'
                  style={{
                    backgroundColor: '#3B82F6', // blue-500 for OFFICETEL
                  }}
                >
                  {property.houseType}
                </span>
                <span className='text-lg font-medium text-gray-900'>{property.address}</span>
              </div>

              {/* 위험 점수 및 등급 */}
              <div className='flex items-center gap-3'>
                <span className='text-sm text-gray-500'>위험 점수: {property.riskScore}</span>
                <span
                  className='text-sm font-medium'
                  style={{
                    color: getRiskGradeColor(property.riskGrade),
                  }}
                >
                  {property.riskGrade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
