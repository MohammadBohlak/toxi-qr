import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef, useState } from "react";
import { StyledSlide, SwiperSection } from "./swiperSlide.styles";

export default function SwiperSnakes({ images }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SwiperSection>
      <Swiper
        // loop={true}
        speed={1500}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        // نستخدم onInit لإلحاق مراجع الأزرار لموديول navigation
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          // تحديث الفهرس عند كل تغيير شريحة
          setCurrentIndex(swiper.activeIndex);
        }}
      >
        {images.map((image, index) => (
          <StyledSlide img={image} key={index} />
        ))}
        {/* أزرار التنقل المخصصة */}
        <button
          ref={prevRef}
          className="custom-nav-btn prev-btn"
          style={currentIndex === 0 ? { display: "none" } : {}}
        >
          <AiOutlineLeft size={30} />
        </button>
        <button
          ref={nextRef}
          className="custom-nav-btn next-btn"
          style={{
            display: currentIndex === images.length - 1 ? "none" : "block",
          }}
        >
          <AiOutlineRight size={30} />
        </button>
      </Swiper>
    </SwiperSection>
  );
}
