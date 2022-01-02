import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style = {{height: 1000, width: 10}}></div>
    </div>
  );
}

export default App;
