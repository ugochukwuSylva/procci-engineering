import { usePortfolio } from "../context/PortfolioContext";
import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  const { hideView } = usePortfolio();

  return (
    <a onClick={hideView} className="vision-mission-btn">
      {children}
    </a>
  );
}

export default ButtonDownload;
