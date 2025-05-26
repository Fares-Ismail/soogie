// Styles
import styles from "./style.module.css";

// Lazy-loaded Components
import { lazy, Suspense } from "react";

// Lazy load components to improve performance
const Product = lazy(() => import("../../components/Product/Product"));
const Heading = lazy(() => import("../../components/Heading/Heading"));
const CollectionsSlider = lazy(() =>
  import("../../components/CollectionsSlider/CollectionsSlider")
);
const TestimonialsSlider = lazy(() =>
  import("../../components/TestimonialsSlider/TestimonialsSlider")
);
const CategoriesSlider = lazy(() =>
  import("../../components/CategoriesSlider/CategoriesSlider")
);
const Contact = lazy(() => import("../../components/Contact/Contact"));
const SignUpSteps = lazy(() =>
  import("../../components/SignupSteps/SignupSteps")
);
const Stats = lazy(() => import("../../components/Stats/Stats"));
const HeroSection = lazy(() => import("../../components/HeroSection/Hero"));

// Images
import clientImg from "/images/client.webp";
import waveImg from "../../assets/images/wave.svg";

// Axios for fetching data
import axios from "axios";

// Hooks
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Home() {
  const { t } = useTranslation(); // Internationalization hook
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching products data from JSON file
    axios
      .get("/data/Api.json")
      .then((response) => {
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          setError("Invalid data format");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Hero Section */}
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>

      {/* Categories Section */}
      <div className='py-20 px-2 sm:px-18 lg:px-20 bg-gray-50 dark:bg-gray-900'>
        <Suspense fallback={<div>Loading Categories...</div>}>
          <CategoriesSlider />
        </Suspense>
      </div>

      {/* Newest Products Section */}
      <div className='py-20 px-2 sm:px-18 lg:px-20'>
        <Suspense fallback={<div>Loading Products...</div>}>
          <Heading className='mb-5'>{t("home.productsHeading")}</Heading>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {products.length === 0 ? (
              <div>No products available</div>
            ) : (
              products.slice(-8).map((product) => (
                <Product
                  key={product.id}
                  product={{
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    id: product.id,
                  }}
                />
              ))
            )}
          </div>
        </Suspense>
      </div>

      {/* Collections Slider Section */}
      <div className='py-20 bg-gray-50 dark:bg-gray-900'>
        <Suspense fallback={<div>Loading Collections...</div>}>
          <CollectionsSlider />
        </Suspense>
      </div>

      {/* Contact and Stats Section */}
      <div className='grid lg:grid-cols-2 gap-y-10'>
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div>Loading Stats...</div>}>
          <Stats />
        </Suspense>
      </div>

      {/* Signup Steps Section */}
      <div className='py-20 px-2 sm:px-18 lg:px-20 bg-gray-50 dark:bg-gray-900'>
        <Suspense fallback={<div>Loading Signup Steps...</div>}>
          <Heading className='mb-5 text-black'>
            {t("home.stepsHeading")}
          </Heading>
          <SignUpSteps />
        </Suspense>
      </div>

      {/* Banner Section */}
      <div
        className={`bg-white ${styles.banner} flex items-center justify-center overflow-hidden`}>
        <div className='relative isolate px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl'>
            <div className='text-center'>
              <h2 className='text-3xl tracking-tight text-balance text-white md:text-6xl'>
                {t("home.bannerHeading")}
              </h2>
              <p className='mt-8 text-md font-medium text-pretty text-gray-500 sm:text-xl/8'>
                {t("home.bannerDescription")}
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-main-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600 transition-all'>
                  {t("home.hShoppingButton")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='py-20'>
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <TestimonialsSlider />
        </Suspense>
      </div>

      {/* Clients Section */}
      <div className='relative py-20 px-2 sm:px-18 lg:px-20 bg-gray-50 dark:bg-gray-900 overflow-hidden'>
        <div className='absolute top-0 lg:top-[-120px] xl:top-[-160px] left-0 w-full opacity-[0.3]'>
          <img src={waveImg} alt='Wave Separator' />
        </div>
        <h2 className='relative z-10 text-4xl font-extrabold text-center text-main-500 dark:text-white'>
          {t("home.clientsDescription")}
        </h2>
        <div className='relative z-10 mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src={clientImg}
              alt={`Client ${index + 1}`}
              width='158'
              height='48'
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
