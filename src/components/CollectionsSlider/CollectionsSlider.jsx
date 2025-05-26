// Packages
import { useTranslation } from "react-i18next";

// Components
import CollectionCard from "../CollectionCard/CollectionCard";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Image (Lazy Loaded)
import collectionImg from "/images/collection.webp";

// Styles
import "@splidejs/splide/dist/css/splide.min.css"; // تضمين CSS الخاص بـ Splide
import "./style.module.css";

// Hooks
import { useEffect } from "react";

// Component
function CollectionsSlider() {
  // Hooks
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Initialize Splide slider
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 2.5, // عرض 2.5 عناصر في نفس الوقت
      gap: "10px",
      autoScroll: {
        speed: 5, // تقليل السرعة لتقليل الحمل
      },
      direction: i18n.language === "ar" ? "rtl" : "ltr",
      arrows: false, // إخفاء الأسهم
      pagination: false, // إخفاء الترقيم
      breakpoints: {
        768: {
          perPage: 1, // عرض 1 عنصر على الشاشات الصغيرة
        },
        1024: {
          perPage: 2, // عرض 2 عنصر على الشاشات المتوسطة
        },
      },
      throttle: 100, // تقليل عدد التحديثات
      preloadPages: 2, // تحميل الصفحات المجاورة فقط لتقليل الحمل
    });

    splide.mount({ AutoScroll }); // ربط الإضافة AutoScroll

    // Cleanup function
    return () => {
      splide.destroy();
    };
  }, [i18n.language]);

  return (
    <>
      {/* Header */}
      <h2 className='relative z-10 text-4xl font-extrabold text-center text-main-500 dark:text-white'>
        {t("home.ourCollections")}
      </h2>

      {/* Slider */}
      <div className='slider-container pt-14'>
        <div className='splide'>
          <div className='splide__track'>
            <ul className='splide__list'>
              {/* العناصر التي سيتم تمريرها داخل السلايدر */}
              {[...Array(6)].map((_, index) => (
                <li key={index} className='splide__slide'>
                  <CollectionCard
                    collection={{
                      route: "/",
                      name: "Korean Style Collection",
                      image: collectionImg,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionsSlider;
