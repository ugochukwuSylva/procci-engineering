import "./Statement.scss";

function Statement({ children, heading, icon, bgColor }) {
  return (
    <div className="statement">
      <h2 className="statement-heading">
        <span className="icon" style={{ background: bgColor }}>
          {icon}
        </span>{" "}
        {heading}
      </h2>
      <p className="statement-text">{children}</p>
    </div>
  );
}

export default Statement;
