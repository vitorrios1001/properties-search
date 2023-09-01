'use client';

import { PropertyCard } from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';
import { Icon } from '@iconify/react/dist/iconify.js';
import dynamic from 'next/dynamic';
import React from 'react';

const PropertySearchBox = dynamic(
  () => import('../components/PropertySearchBox'),
  {
    ssr: false,
  }
);

export default function Home() {
  const { loadProperties, properties, isLoading } = useProperties();

  return (
    <main className='flex min-h-screen flex-col items-center gap-8 p-8 bg-primary'>
      <PropertySearchBox onSelect={loadProperties} />

      <div className='flex flex-col w-full max-w-[800px] gap-6 mt-5'>
        {isLoading && (
          <Icon
            className='text-5xl self-center'
            icon='eos-icons:three-dots-loading'
          />
        )}

        {properties.map((property) => {
          return <PropertyCard property={property} key={property.mlsNumber} />;
        })}
      </div>
    </main>
  );
}
