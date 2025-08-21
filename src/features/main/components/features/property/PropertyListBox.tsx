import { useState } from 'react';

import HomeIcon from '../../../_assets/Home.webp';
import { PROPERTY_TYPE_COLORS } from '../../../constants';
import type { Property } from '../../../types';
import { Pagination } from '../../common';

type Props = {
  properties: Property[];
  title: string;
};

export const PropertyListBox = ({ properties, title }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <div className='w-full rounded-lg bg-white p-6'>
      <h3 className='mb-4 text-2xl font-bold text-gray-900'>{title}</h3>

      <div className='space-y-4'>
        {currentProperties.map((property) => (
          <div key={property.id} className='flex items-start justify-center gap-3'>
            <img src={HomeIcon} alt='home' className='mt-1 h-[19px] w-[15px]' />

            <div className='flex flex-1 flex-col gap-1'>
              {/* 매물 타입 라벨 */}
              <div className='flex items-center gap-3'>
                <span
                  className='flex h-6 w-16 items-center justify-center rounded-xs text-sm font-medium text-white'
                  style={{
                    backgroundColor:
                      PROPERTY_TYPE_COLORS[property.type as keyof typeof PROPERTY_TYPE_COLORS],
                  }}
                >
                  {property.type}
                </span>
                <span className='text-lg font-medium text-gray-900'>{property.buildingName}</span>
              </div>

              {/* 상세 주소 */}
              <span className='text-sm text-gray-500'>{property.address}</span>
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
