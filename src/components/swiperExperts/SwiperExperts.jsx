import { MdLocationOn } from "react-icons/md";
import { MainTitle, SubTitle, Text } from "../common/texts";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import expert from "../../assets/images/expert.png";
import { useTranslation } from "react-i18next";
import { StyledSwiper } from "./swiperSlide";
const SwiperExperts = () => {
  const { t } = useTranslation();
  return (
    <StyledSwiper>
      <MainTitle className="mb-5">{t("expert.title")}</MainTitle>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[1, 2].map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="left d-flex flex-column gap-3">
              <Text className="text">{t("expert.text")}</Text>
              <SubTitle $color="var(--primary)">{t("expert.name")}</SubTitle>
              <Text>{t("expert.specialist")}</Text>
              <Text>
                {" "}
                <MdLocationOn /> {t("expert.country")}
              </Text>
            </div>
            <div className="right">
              <img src={expert} alt="expoer image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};

export default SwiperExperts;
