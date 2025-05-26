// Packages
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

// Components
import Testimonial from "../Testimonial/Testimonial";

// Hooks
import { useRef } from "react";

// Component
function TestimonialsSlider() {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef();

  // Slider Settings
  const settings = {
    className: styles.slider,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    lazyLoad: true,
    rtl: i18n.language === "ar", // Adjusting for right-to-left language support
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Header Section */}
      <header className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-main-500 dark:text-white mb-2">
          {t("home.testimonialsHeading")}
        </h2>
        <p className="text-lg lg:text-xl font-extrabold text-gray-300">
          {t("home.testimonialsDescription")}
        </p>
      </header>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Slider>
      </div>
    </>
  );
}

export default TestimonialsSlider;
