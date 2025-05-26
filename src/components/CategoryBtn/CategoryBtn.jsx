import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // تأكد من أنك تستخدم react-router-dom

function CategoryBtn({ category }) {
  return (
    <Link
      to={category.route}
      className="group rounded-xl flex flex-col items-center gap-1 shadow-lg bg-white dark:bg-gray-600 hover:bg-main-500 hover:text-white dark:text-gray-400 text-center px-3 py-5 text-md font-bold transition-all"
    >
      <RectangleGroupIcon
        aria-hidden="true"
        className="size-12 text-black dark:text-gray-400 group-hover:text-white"
      />
      {category.name}
    </Link>
  );
}

CategoryBtn.propTypes = {
  category: PropTypes.shape({
    route: PropTypes.string.isRequired, // التحقق من أن route هو سلسلة نصية
    name: PropTypes.string.isRequired,  // التحقق من أن name هو سلسلة نصية
  }).isRequired, // التأكد من أن category موجودة
};

export default CategoryBtn;
