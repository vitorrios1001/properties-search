import { Icon } from '@iconify/react';

type PropertyInfoTypeValue =
  | 'bedrooms'
  | 'bathrooms'
  | 'square-footage'
  | 'days-on-market';

const PROPERTY_INFO_DESC: {
  [key in PropertyInfoTypeValue]: { icon: string; desc: string };
} = {
  bathrooms: {
    icon: 'mdi:shower',
    desc: 'Bathrooms',
  },
  'days-on-market': {
    icon: 'mdi:clock-time-eight-outline',
    desc: 'Days on Market',
  },
  bedrooms: {
    icon: 'mdi:bed-double-outline',
    desc: 'Bedrooms',
  },
  'square-footage': {
    icon: 'mdi:fullscreen',
    desc: 'Square Footage',
  },
};

type PropertyInfoProps = {
  value: string;
  valueType: PropertyInfoTypeValue;
};

export const PropertyInfo = ({ value, valueType }: PropertyInfoProps) => {
  const { icon, desc } = PROPERTY_INFO_DESC[valueType];

  return (
    <div title={`${value} ${desc}`} className='flex items-center gap-1'>
      <Icon className='text-3xl text-gray-700' icon={icon} />
      <b>{value}</b>
    </div>
  );
};
