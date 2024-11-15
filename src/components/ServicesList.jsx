import useWindowResizer from "../hook/useWindowResizer";
import "./ServiceList.scss";

function ServiceList({ data, index, translateX }) {
  const {
    frontImage,
    backImage,
    title,
    overview,
    technologies,
    // backgroundImage,
  } = data;

  const { showButton } = useWindowResizer(1200);

  // const styles = {
  //   backgroundImage,
  // };

  return (
    <div
      className="service"
      style={{
        transform: showButton && `translateX(${(index + translateX) * 100}%)`,
      }}
    >
      <div className="card card-front">
        <img src={frontImage} alt="img-of-service" />
        <div className="service-text">
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>

      <div className="card card-back">
        <div className="card-picture">
          {backImage?.map((img, i) => (
            <img src={img} alt="icon" key={i} />
          ))}
        </div>

        <div className="card-technology">
          {technologies?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
