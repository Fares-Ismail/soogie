import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // تأكد من أنك تستخدم 'react-router-dom'

// Component for displaying product details
function Product({ product }) {
  // Translation hook
  const { t } = useTranslation();

  // Destructuring the product props for clarity
  const { id, image, name, price } = product;

  return (
    <div className="group relative rounded-md bg-gray-50 dark:bg-gray-600 p-7 text-center">
      {/* Product Image */}
      <img
        src={image}
        alt={`Product: ${name}`}
        className="aspect-square w-50 mx-auto group-hover:opacity-75 lg:aspect-square"
      />

      {/* Product Name */}
      <h3 className="text-md text-center text-gray-900 dark:text-gray-400 font-bold mb-2">
        <Link to={`/#${id}`}>
          <span aria-hidden="true" className="inset-0" />
          {name}
        </Link>
      </h3>

      {/* Product Price */}
      <p className="text-xl font-bold text-main-600 dark:text-white mb-2">
        ${price}
      </p>

      {/* Buy Now Button */}
      <Link
        to={`/#${id}`}
        className="w-full block rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600 transition-all"
      >
        {t("home.buyNow")}
      </Link>
    </div>
  );
}

// Define Prop Types
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
