'use client';
import { SearchBox } from '@mapbox/search-js-react';

type PropertySearchBoxProps = {
  onSelect: (latitude: number, longitude: number) => void;
};

const PropertySearchBox = ({ onSelect }: PropertySearchBoxProps) => {
  return (
    <form>
      {/* @ts-expect-error Server Component */}
      <SearchBox
        accessToken={process.env.NEXT_PUBLIC_MB_ACCESS_TOKEN}
        value=''
        options={{
          country: 'us',
          language: 'en',
        }}
        onRetrieve={(props) => {
          const coordinates = props.features[0].properties.coordinates;

          const { latitude, longitude } = coordinates;

          onSelect(latitude, longitude);
        }}
      />
    </form>
  );
};

export default PropertySearchBox;
