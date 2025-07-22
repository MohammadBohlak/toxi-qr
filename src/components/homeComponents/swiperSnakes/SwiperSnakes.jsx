import { BiCheckCircle } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { Box, StyledSlide, SwiperSection } from "./swiperSlide.styles";
import { MainTitle, SubTitle } from "../../common/texts";
import { api } from "../../../utils/api/api";
import { useSelector } from "react-redux";

export default function SwiperSnakes({ images }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [home, setHome] = useState({});
  const showLoader = useSelector((state) => state.loader.isLoading);
  useEffect(() => {
    api.get("/home").then((res) => {
      setHome(res.data);
    });
  }, []);
  return (
    <>
      {!showLoader ? (
        <SwiperSection>
          <Swiper
            style={{ position: "relative" }}
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
            onTransitionStart={() => setTransitioning(true)}
            onTransitionEnd={() => setTransitioning(false)}
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

            {home.show_visitor_count && (
              <Box $active={!transitioning} $transitioning={transitioning}>
                <div className="visitors">
                  <SlPeople />
                  <div>
                    <MainTitle>{home.visitor_count}</MainTitle>
                    <SubTitle>Visitors</SubTitle>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="checks">
                  <BiCheckCircle />
                  <div>
                    <MainTitle>{home.total_images}</MainTitle>
                    <SubTitle>Checks</SubTitle>
                  </div>
                </div>
              </Box>
            )}
          </Swiper>
        </SwiperSection>
      ) : (
        <div style={{ minHeight: "500px" }}></div>
      )}
    </>
  );
}
