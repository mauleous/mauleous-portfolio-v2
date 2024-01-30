import './App.css';
import './mauleous.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experiences />
      <header className="App-header">
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React HOHOHO
        </a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
