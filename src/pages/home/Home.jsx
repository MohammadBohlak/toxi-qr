import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/snakes/1.jpg";
import img2 from "../../assets/images/snakes/2.jpg";
import img3 from "../../assets/images/snakes/3.jpg";
import img4 from "../../assets/images/snakes/4.jpg";
import img5 from "../../assets/images/snakes/5.jpg";
import SwiperSnakes from "../../components/homeComponents/swiperSnakes/SwiperSnakes";
import HowWork from "../../components/homeComponents/howWork/HowWork";
import { ContributingSection } from "../../components/homeComponents/contributing/ContributingSection";
import Features from "../../components/homeComponents/features/Features";
import Devices from "../../components/homeComponents/devices/Devices";
import SwiperExperts from "../../components/swiperExperts/SwiperExperts";
import DetectionPage from "../Detection/DetectionPage";
import Footer from "../../components/ui/footer/Footer";

const StyledHome = styled.section`
  /* height: 500px; */
  width: 100%;
`;
const Home = () => {
  return (
    <>
      <StyledHome>
        <SwiperSnakes images={[img1, img2, img3, img4, img5]} />
        <HowWork />
        <DetectionPage />
        <ContributingSection />
        <Features />
        <Devices />
        <SwiperExperts />
      </StyledHome>
    </>
  );
};

export default Home;
