import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CollectionCard({ collection }) {
  const [firstWord, ...rest] = collection.name.split(" ");
  const restOfName = rest.join(" ");

  return (
    <Link
      to={collection.route}
      className="relative block rounded-3xl shadow-xl hover:shadow-gray-500 dark:hover:shadow-gray-950 overflow-hidden hover:text-white dark:text-gray-400 transition-all"
    >
      {/* تحميل الصورة بشكل كسول */}
      <img
        src={collection.image}
        alt={`Collection: ${collection.name}`} // النص البديل يكون أكثر وصفًا
        loading="lazy" // تحميل الصورة بشكل كسول
      />
      <div className="flex items-end p-3 absolute w-full h-full bg-gray-800 opacity-[0.3] top-0 left-0"></div>
      <h3 className="absolute z-10 bottom-5 ltr:left-5 rtl:right-5 text-white text-4xl">
        <span className="block">{firstWord}</span>
        <span className="block">{restOfName}</span>
      </h3>
    </Link>
  );
}

CollectionCard.propTypes = {
  collection: PropTypes.shape({
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CollectionCard;
