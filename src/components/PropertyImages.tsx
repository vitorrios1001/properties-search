import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CDN_PREFIX = 'https://cdn.repliers.io';

type PropertyImagesProps = {
  images: string[];
};

export const PropertyImages = ({ images }: PropertyImagesProps) => {
  const imageUrls = images.map((img) => {
    return `${CDN_PREFIX}/${img}`;
  });

  return (
    <Carousel className='w-full md:w-80 h-72 object-cover' showThumbs={false}>
      {imageUrls.map((img) => {
        return (
          <div key={img}>
            <img
              src={img}
              className='w-full md:w-80 h-72 object-cover'
              alt={`Image ${img}`}
            />
          </div>
        );
      })}
    </Carousel>
  );
};
