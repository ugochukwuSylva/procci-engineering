import "./Hero.scss";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import ButtonDownload from "./ButtonDownload";
import useWindowResizer from "../hook/useWindowResizer";

function Hero() {
  const { showButton } = useWindowResizer(960);

  return (
    <div className="hero">
      <div className="hero__text__container">
        <span>PROCCI</span>
        <div>
          <span className="is_a">Is an</span>

          <span>
            <ReactTyped
              strings={["Engineering Company!"]}
              typeSpeed={30}
              backSpeed={60}
              loop
            />
          </span>
        </div>
        <div>
          What we know how to do best is leaving our esteemed customer happy and
          satisfied.
          <br />
          Contact us and let's convert your dreams into reality!
        </div>

        <div className="hero__skill__container">
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={4} />%
            </span>
            <h6>Reliability</h6>
          </div>
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={6} />%
            </span>
            <h6>Comfortability</h6>
          </div>
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={8} />%
            </span>
            <h6>Durability</h6>
          </div>
        </div>
        {showButton && (
          <div style={{ transform: "translateY(5rem)" }}>
            <ButtonDownload>Vision & Mission</ButtonDownload>
          </div>
        )}
      </div>
      {/*  */}

      <div className="hero__img__container">
        <picture>
          <img src="hero-image-1.png" alt="heroimage" />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
