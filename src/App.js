import './App.css';
import './mauleous.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experiences />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
