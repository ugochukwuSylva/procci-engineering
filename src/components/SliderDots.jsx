import "./SliderDots.scss";
import SliderDotList from "./SliderDotList";
import { SERVICES } from "../data/services";

function SliderDots({ dotSlide, translateX }) {
  return (
    <ul className="dots-container ">
      {SERVICES.map((_, i) => (
        <SliderDotList
          key={i}
          isActiveDot={i === -translateX}
          handleActiveDot={() => dotSlide(i)}
        />
      ))}
    </ul>
  );
}

export default SliderDots;
