import React from 'react'
import Image from "next/image";
import style from '../Navigation/slide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slide = () => {
  return (
    <div>
      <div className={style.slide}>
        <Swiper navigation={true} modules={[Navigation]} >
          <SwiperSlide className={style.mySwiper}>
            <Image src='https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/sliding-ip14-pro-max-th66.png'
              alt="picture"
              width={1200}
              height={300} >

            </Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sliding-apple-112.png'
              alt='dsadas'
              width={1200}
              height={300}>
            </Image>
          </SwiperSlide>
          <SwiperSlide> <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMqD7GWhsk-xgCJy6OH5kqKIbzbxJqphTZiRUslLDEMjGAwVpGjuEeEolXYM8msOVDo4&usqp=CAU'
            alt='dsadas'
            width={1200}
            height={300}>
          </Image></SwiperSlide>
          <SwiperSlide>
            <Image src='https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/dung-mac-desk-sis-00222.png'
              alt='dsadas'
              width={1200}
              height={300}>
            </Image>
          </SwiperSlide>
        </Swiper>

        <div className={style.img}>
          <Image src='https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sliding-apple-112.png'
            alt='dsadas'
            width={350}
            height={150}>
          </Image>
          <Image src='https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/msi%20gaming%20right%20banner.jpg'
            alt='dsadas'
            width={350}
            height={150}>
          </Image>
        </div>
      </div>


    </div>
  )
}

export default Slide