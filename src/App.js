import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Body from './components/Body.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}

export default App;
