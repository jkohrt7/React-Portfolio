import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div style = {{height: 1000, width: 10}}></div>
    </div>
  );
}

export default App;
