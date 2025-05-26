import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

function Heading({ className, children }) {
  return (
    <h2
      className={`flex gap-x-2 items-center text-2xl font-bold text-main-500 dark:text-white ${className}`}>
      <ChevronDoubleRightIcon
        aria-hidden='true'
        className='rtl:rotate-180 size-5 text-gray-500 dark:text-gray-400'
      />
      {children}
    </h2>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired, // لا حاجة لتغيير هذا لأن الأطفال يمكن أن يكونوا أي نوع من العناصر
  className: PropTypes.string, // استخدام PropTypes.string بدلاً من PropTypes.node
};

export default Heading;
