import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SwiperComponent.css'; // 引入CSS文件

// 生成随机颜色的函数
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SwiperComponent: React.FC = () => {
const [isInitial, setIsInitial] = useState(true);

  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={80}
        speed={800} // 控制滚动速度（平滑滚动）
        mousewheel={true} // 启用鼠标滚轮控制
        freeMode={false} // 启用自由模式
        initialSlide={-1}
        centeredSlides={true}
      >
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 1
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 2
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 3
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 4
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 5
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundColor: getRandomColor(),
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black', // 黑色边框
            opacity: 0.8, // 设置半透明效果
          }}
        >
          <div className="text-box">
            Artifact's Name 6
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
