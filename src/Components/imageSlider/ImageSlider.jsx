import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './imageSlider.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageSlider(props) {
  return (
    <div className='gallery'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {props.images.map((img,index)=>{
            return <SwiperSlide>
                             <img src={img} key={index}/>
                    </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}
