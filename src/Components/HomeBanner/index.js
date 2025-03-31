import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideBanner1 from "../../assets/images/slideBanner1.jpg";
import slideBanner2 from "../../assets/images/slideBanner2.jpg";
import slideBanner3 from "../../assets/images/slideBanner3.jpg";
import slideBanner4 from "../../assets/images/slideBanner4.jpg";
import { BannerContainer } from "./styles.ts";

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    fade: false,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        <div className="item">
          <img
            src={slideBanner1}
            className="w-100"
            alt="Promoção especial"
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={slideBanner2}
            className="w-100"
            alt="Ofertas exclusivas"
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={slideBanner3}
            className="w-100"
            alt="Ofertas exclusivas"
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={slideBanner4}
            className="w-100"
            alt="Ofertas exclusivas"
            loading="lazy"
          />
        </div>
      </Slider>
    </BannerContainer>
  );
};

export default HomeBanner;
