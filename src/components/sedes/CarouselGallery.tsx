'use client';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CarouselGallery = () => {
  return (
    <div className="w-full h-96"> {/* Agrega contenedor con altura fija */}
      <SwiperComponent
          effect={'slide'}  // Efecto slide para evitar congelamiento; cube requiere buen GPU
          grabCursor={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
        <SwiperSlide className="basis-[94%]" >
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" width={500} height={500} className=" h-full object-cover"  />
        </SwiperSlide>
        <SwiperSlide className="basis-[94%]" >
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" width={500} height={500} className=" h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="basis-[94%]" >
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" width={100} height={500} className=" h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="basis-[94%]" >
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" width={500} height={500} className=" h-full object-cover" />
        </SwiperSlide>
        </SwiperComponent>
      </div>
    )
}
