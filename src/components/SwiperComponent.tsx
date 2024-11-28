import React, { useState } from 'react';
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
  const slidesData = [
    "Artifact's Name 1",
    "Artifact's Name 2",
    "Artifact's Name 3",
    "Artifact's Name 4",
    "Artifact's Name 5",
    "Artifact's Name 6",
    "Artifact's Name 7",
    "Artifact's Name 8"
  ];
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [targetIndex, setTargetIndex] = useState<number>(0);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex); // 更新当前活动滑块的索引
  };
  const handleSlideChangeTransitionEnd = () => {
    // 使用 setTimeout 延迟更新
    setTimeout(() => {
      setIsInitial(false);
    }, 50); // 延迟 100 毫秒（可以调整这个值）
  };
  const handleSlideMove = () => {
    // 使用 setTimeout 延迟更新
    setTimeout(() => {
      setTargetIndex(targetIndex + 1)
    }, 10); // 延迟 100 毫秒（可以调整这个值）
  };
  const getSlideStyle = (index: number) => {
    // 中心的滑块放大
    console.log(currentSlideIndex)
    const isCenterSlide = Math.abs(currentSlideIndex - index) ==0; // 你可以调整 "2" 来设置哪些滑块被视为“居中”
    return {
      backgroundColor: getRandomColor(),
      borderWidth: '10px',
      borderStyle: 'solid',
      borderColor: 'black', // 黑色边框
      opacity: 0.8,
      // transform: isCenterSlide ? 'scale(1.2)' : 'scale(1)', // 放大当前滑块
      // transition: 'transform 0.5s ease', // 放大效果的平滑过渡
      visibility: (index > slidesData.length - 5 && isInitial == true) ? 'hidden' : 'visible' as 'visible' | 'hidden'
    };
  };
    // 左上角按钮点击事件
    const handleLeftButtonClick = () => {
      console.log('Left button clicked');
    };
  
    // 右上角按钮点击事件
    const handleRightButtonClick = () => {
      console.log('Right button clicked');
    };
  return (
    <div className="swiper-container">
      {/* 左上角按钮 */}
      <button
        className="top-left-button"
        onClick={handleLeftButtonClick}
      >
        <img src="back.svg" alt="Left Button" />
      </button>

      {/* 右上角按钮 */}
      <button
        className="top-right-button"
        onClick={handleRightButtonClick}
      >
        <img src="more.svg" alt="Right Button" />
      </button>
      <Swiper
        loop={true}
        slidesPerView={5}
        initialSlide={7}
        loopAdditionalSlides={2}
        spaceBetween={80}
        speed={800} // 控制滚动速度（平滑滚动）
        mousewheel={true} // 启用鼠标滚轮控制
        freeMode={false} // 启用自由模式
        centeredSlides={true}
        onSliderFirstMove={handleSlideChangeTransitionEnd}
        onSliderMove={handleSlideChange}
      >
        {/* 使用 map 方法生成每个滑块 */}
        {slidesData.map((name, index) => (
          <SwiperSlide
            key={index} // 使用唯一的 key 以帮助 React 管理每个元素
            className="swiper-slide"
            style={getSlideStyle(index)}
          >
            <div className="text-box">{name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
