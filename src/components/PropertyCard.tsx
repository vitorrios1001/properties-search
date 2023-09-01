import { Property } from '@/types/property';
import { PropertyInfo } from './PropertyInfo';
import { PropertyImages } from './PropertyImages';
import { formatPrice } from '@/helpers/format';

type PropertyCardProps = {
  property: Property;
};

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { address, mlsNumber, details, images } = property;

  return (
    <div
      key={mlsNumber}
      className='flex flex-col md:flex-row w-full bg-white rounded-2xl overflow-hidden text-black shadow-2xl'
    >
      <PropertyImages images={images} />

      <div className='flex flex-col flex-1 p-3'>
        <div className='flex justify-between w-full'>
          <b>
            {address.city}, {address.state}
          </b>

          <small>{mlsNumber}</small>
        </div>

        <p className='overflow-ellipsis line-clamp-3 text-gray-500'>
          {details.description}
        </p>

        <div className='flex gap-3 py-2'>
          <PropertyInfo value={details.numBathrooms} valueType='bathrooms' />
          <PropertyInfo value={details.numBedrooms} valueType='bedrooms' />
          <PropertyInfo
            value={property.daysOnMarket}
            valueType='days-on-market'
          />
          <PropertyInfo value={details.sqft} valueType='square-footage' />
        </div>

        <div className='flex justify-between items-end mt-auto'>
          <div className='flex flex-col'>
            <small className='text-gray-500'>
              from <s>{formatPrice(property.originalPrice)}</s>
            </small>

            <b className='text-3xl'>${formatPrice(property.listPrice)}</b>
          </div>

          <a
            href='https://www.linkedin.com/in/vitorluizrios/'
            target='_blank'
            className='bg-secondary shadow font-bold text-primary-dark text-xl px-5 py-1 rounded-md'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

/**

Address x
Price x
Days On Market x
Bedrooms x
Bathrooms x
Square Footage x
One cover image x

 */
