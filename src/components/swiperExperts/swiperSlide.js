import styled from "styled-components";

export const StyledSwiper = styled.section`
  min-height: 500px;
  background: ${({ theme }) => theme.colors.backLight};
  padding-top: var(--m-top);
  .swiper {
    background: ${({ theme }) => theme.colors.backLight};
    direction: ltr;
    width: 100%;
    height: fit-content;
    padding-bottom: 60px;
    .swiper-wrapper {
      align-items: center;
    }

    .swiper-pagination {
      transform: translate(-70%, -20px);
      margin: auto;
    }
    .swiper-pagination .swiper-pagination-bullet {
      background-color: transparent;
      border: 3px solid ${({ theme }) => theme.colors.primary} !important;
      width: 22px;
      height: 22px;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  .swiper-slide {
    direction: ${({ theme }) => (theme.lang === "ar" ? "rtl" : "ltr")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    padding: 0px var(--p-container);
    .left {
      flex: 1;
      hyphens: auto !important;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: end;
    }
    img {
      width: 50%;
      border-radius: 50%;
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 20px;
      .right {
        justify-content: center;
        img {
          width: 50%;
        }
      }
      .left {
        align-items: center;
        text-align: center;
        span,
        h2 {
          text-align: center;
        }
      }
    }
  }
`;
