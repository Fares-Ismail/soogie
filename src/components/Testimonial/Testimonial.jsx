import PropTypes from "prop-types";
import testimonialImg from "/images/testimonial.webp";

const TestimonialCard = ({ name, role, testimonial }) => (
  <div className="text-center">
    <blockquote className="text-sm/8 font-semibold text-gray-400 lg:text-md/9">
      <p>{testimonial}</p>
    </blockquote>
    <figcaption className="mt-10">
      <img alt={name} src={testimonialImg} className="mx-auto size-10 rounded-full" />
      <div className="mt-4 flex rtl:flex-row-reverse items-center justify-center space-x-3 text-base gap-x-2">
        <div className="text-xs font-semibold text-gray-900 dark:text-white">{name}</div>
        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900 dark:fill-white">
          <circle r={1} cx={1} cy={1} />
        </svg>
        <div className="text-xs text-gray-300">{role}</div>
      </div>
    </figcaption>
  </div>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
};

export default function Testimonial() {
  return (
    <section className="relative isolate rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-600 shadow-lg px-6 py-10 sm:py-10 lg:px-8 transition-all">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <TestimonialCard 
            name="Judith Black" 
            role="CEO of Workcation" 
            testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
          />
        </figure>
      </div>
    </section>
  );
}
