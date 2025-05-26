// HeroSection.js

// استيراد الأيقونة التي سيتم استخدامها في الزر
import { ArrowRightIcon } from '@heroicons/react/24/outline'; 

// استيراد Hook الترجمة لتفعيل الترجمة في النصوص
import { useTranslation } from "react-i18next";

// استيراد ملف الأنماط (CSS) الخاص بهذه الصفحة
import styles from "../../pages/Home/style.module.css";

const HeroSection = () => {
  // استخدام Hook الترجمة للوصول إلى النصوص المترجمة
  const { t } = useTranslation();

  return (
    <div className={`bg-white ${styles.hero} flex items-center justify-center mt-[64px]`}>
      {/* حاوية القسم التي تحتوي على النصوص والأزرار */}
      <div className="relative z-10 isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            {/* العنوان الرئيسي للقسم */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              {t("home.heroHeading")}
            </h1>

            {/* وصف القسم مع النص المترجم */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              {t("home.heroDescription")}
            </p>

            {/* الأزرار التي تمكّن المستخدم من التفاعل */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* زر التسوق */}
              <a
                href="#"
                className="rounded-md bg-main-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-main-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600 transition-all"
                aria-label={t("home.hShoppingButton")}  // إضافة aria-label
              >
                {t("home.hShoppingButton")}
              </a>

              {/* زر البيع مع أيقونة السهم */}
              <a
                href="#"
                className="text-sm/6 font-semibold text-white flex items-center gap-1"
                aria-label={t("home.hSellingButton")}  // إضافة aria-label
              >
                {t("home.hSellingButton")}
                {/* أيقونة السهم الموجودة على زر البيع */}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="rtl:rotate-180 size-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
