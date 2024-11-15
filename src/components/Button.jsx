import { usePortfolio } from "../context/PortfolioContext";
import "./Button.scss";

function Button({ children }) {
  const { hideView } = usePortfolio();

  return (
    <a onClick={hideView} className="vision-mission-btn">
      {children}
    </a>
  );
}

export default Button;
