import stepImg from "/images/step-1.webp";
import stepImg2 from "/images/step-2.webp";

// Array of step details (images and numbers)
const steps = [
  { id: 1, image: stepImg },
  { id: 2, image: stepImg },
  { id: 3, image: stepImg2 },
  { id: 4, image: stepImg },
];

export default function SignUpSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map(({ id, image }) => (
        <div
          key={id}
          className={`relative bg-white rounded-xl shadow-lg ${
            id % 2 === 0 ? "sm:translate-y-0" : "sm:translate-y-10"
          }`}
        >
          <img src={image} alt={`Step ${id}`} className="rounded-xl mx-auto" />
          <div className="absolute left-[50%] translate-x-[-50%] bottom-[-20px] flex items-center justify-center bg-main-500 rounded-full w-[40px] aspect-square text-white font-bold">
            {id}
          </div>
        </div>
      ))}
    </div>
  );
}
