import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion"
import Image from 'next/image';


const swipeAnimation = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}


export default function SwiperProject() {
  return (
    <motion.div
      className="swiper_project"
      custom={1}
      variants={swipeAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 1,
      }}
    >
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        initialSlide={2}
        autoplay={{ delay: 1000 }}
        // spaceBetween={30}
        // loop={true}  
        modules={[Autoplay]}
        pagination={true}
        className="swiper"
      >
        <SwiperSlide className="swiper_slide" >
          <Image src="/SwiperImg/winners.png" alt="winners-link" width={190} height={190} />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide" >
        <Image src="/SwiperImg/pearson.png" alt="pearson-link" width={190} height={190} />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide" >
        <Image src="/SwiperImg/source.png" alt="source-link" width={190} height={190} />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide" >
        <Image src="/SwiperImg/tims.png" alt="tims-link" width={190} height={190} />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide" >
        <Image src="/SwiperImg/hudson.png" alt="hudson-link" width={190} height={190} />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
