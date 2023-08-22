import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './slide.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// import required modules
import { Navigation } from 'swiper/modules';

// SwiperCore.use([Navigation]);

const Slide = () => {
  return (
    <div>
      <div className={style.slide}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image src='https://cdn.tgdd.vn/2023/07/banner/iP11-1200-300-1200x300-1.png'
              alt='dsadas'
              width={900}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={style.mySwiper}>
            <Image src='https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/banner-uu-dai-shopeepay-1200.png'
              alt="picture"
              width={900}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://cdn.tgdd.vn/2023/08/banner/1200x150-tgdd-1200x150-2.png'
              alt='dsadas'
              width={900}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMqD7GWhsk-xgCJy6OH5kqKIbzbxJqphTZiRUslLDEMjGAwVpGjuEeEolXYM8msOVDo4&usqp=CAU'
              alt='dsadas'
              width={900}
              height={300}
            />
          </SwiperSlide>
        </Swiper>

        <div className={style.img}>
          <Image src='https://cdn.sforum.vn/sforum/wp-content/uploads/2021/09/Apple_iphone13_colors_09142021_big.jpg.medium_2x.jpg'
            alt='dsadas'
            width={350}
            height={150}
          />
          <Image src='https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/msi%20gaming%20right%20banner.jpg'
            alt='dsadas'
            width={350}
            height={150}
          />
        </div>
      </div>
      <div className={style.Banners}>
        <Image src='https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/4/638240666352557412_H7_1200x100.png'
          alt='ádasdas'
          width={1200}
          height={100}
        />
      </div>
    </div>
  );
};

export default Slide;