import Header from "./components/Header";
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Creations from './components/Creations';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { Element } from "react-scroll";


function App() {
  return (
    <div className="App">
      <Header />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="experiences">
        <Experiences />
      </Element>

      <Element name="creations">
        <Creations />
      </Element>
      
      <Element name="about">
        <AboutMe />
      </Element>      

      <Footer />
    </div>
  );
}

export default App;
