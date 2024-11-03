import Header from "./components/Header";
// import Animation from "./animation/Animation";
import About from "./components/About";
// import Stack from "./components/Stack";
import Service from "./components/Services";
import Footer from "./components/Footer";

function App() {
  // const components = [
  //   <Header />,
  //   <About />,
  //   <Projects />,
  //   // <Stack />,
  //   <Footer />,
  // ];

  return (
    <>
      {/* {components.map((component, i) => (
        <Animation key={i} delay={i}>
          {component}
        </Animation>
      ))} */}

      <Header />
      <About />
      <Service />
      <Footer />
    </>
  );
}

export default App;
