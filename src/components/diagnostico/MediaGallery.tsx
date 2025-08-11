import Image from 'next/image'

type MediaGalleryProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export const MediaGallery = ({ images }: MediaGalleryProps) => {
  return (
    <>
      <Image
        src={images[0].src}
        alt={images[0].alt}
        width={500}
        height={300}
        className='rounded-lg'
      />
    </>
  )
}


