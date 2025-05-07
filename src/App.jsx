import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import Work from "./components/Work/Work.jsx";
import Standout from "./components/Standout/Standout.jsx";
import Brandimpact from "./components/Brandimpact/Brandimpact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Boxes from "./components/Work/Boxes.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Boxes/>
      <Work />
      <Standout />
      <Brandimpact />
      <Footer />
    </>
  );
};

export default App;
