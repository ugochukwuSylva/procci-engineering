import "./Services.scss";
import { motion } from "framer-motion";
import useWindowResizer from "../hook/useWindowResizer";
import { useState } from "react";
import SliderDots from "./SliderDots";
import { SERVICES } from "../data/services";
import ServiceList from "./ServicesList";

function Service() {
  const [translateX, setTranslateX] = useState(0);
  const { showButton } = useWindowResizer(1200);
  const dataLength = SERVICES.length - 1;

  function next() {
    setTranslateX((next) => (next === -dataLength ? 0 : next - 1));
  }

  function previous() {
    setTranslateX((prev) => (prev === 0 ? -dataLength : prev + 1));
  }

  function dotSlide(i) {
    setTranslateX(-i);
  }

  return (
    <motion.section
      id="Services"
      className="services"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="heading-primary right">Services</h1>

      {showButton && (
        <span onClick={previous} className="btn btn--left">
          &larr;
        </span>
      )}

      <div className="services-container">
        {SERVICES.map((service, i) => (
          <ServiceList
            key={i}
            data={service}
            index={i}
            translateX={translateX}
          />
        ))}
      </div>

      <div className="services-bg">
        <video muted loop autoPlay>
          <source src="service-bg-1.mp4" type="video/mp4" />
        </video>
      </div>

      {showButton && (
        <span onClick={next} className="btn btn--right">
          &rarr;
        </span>
      )}

      {showButton && <SliderDots dotSlide={dotSlide} translateX={translateX} />}
    </motion.section>
  );
}

export default Service;
