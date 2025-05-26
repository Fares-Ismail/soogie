// Packages
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types"; // استيراد PropTypes للتحقق من الخصائص

// Components
import Heading from "../Heading/Heading";
import Slider from "react-slick";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

// Hooks
import { useRef } from "react";

// Component
function CategoriesSlider() {
  // Hooks
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);  // Initialized with null to check reference

  // Settings of Slider
  const settings = {
    className: styles.slider,
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    rtl: i18n.language === "ar",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider Button Component
  const SliderButton = ({ direction }) => {
    const icon = direction === "prev" ? <ChevronLeftIcon aria-hidden="true" className="size-10 sm-size-5" /> : <ChevronRightIcon aria-hidden="true" className="size-10 sm-size-5" />;
    const action = direction === "prev" ? () => sliderRef.current?.slickPrev() : () => sliderRef.current?.slickNext();
    
    return (
      <button
        type="button"
        onClick={action}
        className="relative text-gray-400 hover:text-black dark:hover:text-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden transition-all cursor-pointer"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">{direction === "prev" ? "Previous Slider" : "Next Slider"}</span>
        {icon}
      </button>
    );
  };

  // التحقق من صحة الخصائص باستخدام PropTypes
  SliderButton.propTypes = {
    direction: PropTypes.oneOf(["prev", "next"]).isRequired, // التأكد من أن "direction" يمكن أن يكون "prev" أو "next" فقط
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <Heading className="mb-0">{t("home.catHeading")}</Heading>
        <div className="flex items-center gap-3 rtl:flex-row-reverse">
          <SliderButton direction="prev" />
          <SliderButton direction="next" />
        </div>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {["Phones", "Phones", "Phones", "Phones" , "Phones" , "Phones"].map((category, index) => (
            <CategoryBtn key={index} category={{ route: "/", name: category }} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CategoriesSlider;
