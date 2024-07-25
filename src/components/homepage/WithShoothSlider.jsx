// SmoothLetteringSlider.js
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./SmoothLetteringSlider.css"; // Custom styles for animations

// Higher-Order Component
const withSmoothLettering = (WrappedComponent) => {
  return (
    <WrappedComponent>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white"
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="p-8">
            <h2 className="animate-fadeInUp translate-y-5 text-3xl font-bold opacity-0 delay-200">
              {slide.title}
            </h2>
            <p className="animate-fadeInUp delay-400 translate-y-5 text-lg opacity-0">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </WrappedComponent>
  );
};

// Custom HOC Slider
const SmoothLetteringSlider = withSmoothLettering(AwesomeSlider);

export default SmoothLetteringSlider;
