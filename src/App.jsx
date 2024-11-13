import Header from "./components/Header";
// import Animation from "./animation/Animation";
import About from "./components/About";
// import Stack from "./components/Stack";
import Service from "./components/Services";
import Footer from "./components/Footer";
import MissionVisionStatement from "./components/MissionVisionStatement";
import { usePortfolio } from "./context/PortfolioContext";

function App() {
  const { isVisible } = usePortfolio();

  // const components = [
  //   <Header />,
  //   <About />,
  //   <Projects />,
  //   // <Stack />,
  //   <Footer />,
  // ];

  return (
    <div>
      {/* {components.map((component, i) => (
        <Animation key={i} delay={i}>
          {component}
        </Animation>
      ))} */}

      {!isVisible ? (
        <>
          <Header />
          <About />
          <Service />
          <Footer />
        </>
      ) : (
        <MissionVisionStatement />
      )}
    </div>
  );
}

export default App;
