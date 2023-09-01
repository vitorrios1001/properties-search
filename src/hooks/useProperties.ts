import React from 'react';
import { Property } from '@/types/property';

const DEFAULT_RADIUS = 2000;

export const useProperties = () => {
  const [properties, setProperties] = React.useState<Property[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const loadProperties = (latitude: number, longitude: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'REPLIERS-API-KEY': process.env.NEXT_PUBLIC_REPLIERS_API_KEY,
      },
    };

    setIsLoading(true);

    fetch(
      `https://sandbox.repliers.io/listings?lat=${latitude}&listings=true&long=${longitude}&operator=AND&radius=${DEFAULT_RADIUS}&sortBy=updatedOnDesc&status=A`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!!response?.listings) {
          setProperties(response.listings);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    loadProperties,
    properties,
    isLoading,
  };
};
