'use client'
import { client } from "@/lib/sanity.client"
import { LATEST_POSTS } from "@/lib/queries"
import type { LatestPostItemType, LatestPostsType } from "@/types/blog"
import Image from "next/image"
import { formatFechaPeru } from "@/helpers/formatFechaPeru"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

import 'swiper/css';
import 'swiper/css/pagination';
import { NavBarIntern } from "../common/NavBarIntern"

// Estilos personalizados para los dots
const swiperStyles = `
  .swiper-custom-pagination .swiper-pagination-bullet {
    width: 40px;
    height: 8px;
    background: #E5E7EB;
    opacity: 1;
    margin: 0 4px;
    border-radius: 8px;
  }

  .swiper-custom-pagination .swiper-pagination-bullet-active {
    background: #00B5D8;
  }

  @media (max-width: 768px) {
    .swiper-custom-pagination .swiper-pagination-bullet {
      width: 24px;
      height: 6px;
      margin: 0 2px;
      border-radius: 4px;
    }
  }
`;

export const HeroBlog = () => {
  // Inyectar estilos personalizados
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = swiperStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const [data, setData] = useState<LatestPostsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result: LatestPostsType = await client.fetch(LATEST_POSTS);
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return (
    <div className="relative bg-[#F7FAFA] text-in-blue-title pb-12">
      <div className="md:bg-transparent bg-in-blue-dark">
        <NavBarIntern/>
      </div>
      <div className="text-center pt-6 md:pt-20 pb-16 space-y-8 px-4">
        <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-8">Tu espacio para aprender y prevenir</h1>
        <p className="font-in-poppins text-[13px] md:text-base">Descubre cómo mejorar tu salud con información práctica y respaldada por expertos.</p>
      </div>
      <section className="max-w-7xl mx-auto md:p-8 rounded-3xl bg-white">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#F7FAFA] rounded-2xl p-6 flex flex-col">
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-full" />
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
        <div className="relative bg-[#F7FAFA] text-in-blue-title pb-12">

            <div className="lg:bg-transparent bg-in-blue-dark">
              <NavBarIntern/>
            </div>
            <div className="text-center py-12 md:py-20 lg:py-24 space-y-8 px-4">
                <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-8">Tu espacio para aprender y prevenir</h1>
                <p className="font-in-poppins text-[13px] md:text-base">Descubre cómo mejorar tu salud con información práctica y respaldada por expertos.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
              <section className="p-4 md:p-8 rounded-3xl bg-white mb-8">
                <Swiper
                  modules={[Pagination]}
                  className="mySwiper"
                  pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination'
                  }}
                  slidesPerView={1}
                  style={{ height: 'auto' }}
                >
                {data.items.map((item: LatestPostItemType) => (
                  <SwiperSlide key={item.title}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:space-x-6 h-auto md:h-[280px]">
                      <div className="col-span-1 md:col-span-6 bg-[#F7FAFA] rounded-2xl p-6 md:py-8 md:px-8 flex flex-col h-full">
                        <div className="space-y-4">
                          <div>
                           <p className="bg-in-cyan text-white inline-block text-sm px-4 rounded-full">{item.category?.title || 'Sin categoría'}</p>
                          </div>
                          <h3 className="font-in-nunito text-lg md:text-xl line-clamp-2 md:pr-8">{item.title}</h3>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-auto space-y-2 md:space-y-0">
                            <div className="flex items-center">
                              <Image
                                src={item.author.image?.url || ""}
                                alt={item.author.name || ""}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <p className="font-semibold ml-2">{item.author.name}</p>
                            </div>
                            <p className="text-sm">{formatFechaPeru(item.publishedAt)}</p>
                          </div>
                      </div>
                      <div className="hidden md:block md:col-span-6 h-full">
                        <Image
                          src={item.image?.url || ""}
                          alt={item.image?.alt || ""}
                          width={500}
                          height={500}
                          className="rounded-2xl w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
              </section>
              <div className="swiper-custom-pagination flex justify-center mt-4"></div>
            </div>
        </div>
  )
}
