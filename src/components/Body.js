import AboutMe from './body-children/AboutMe.js';
import Portfolio from './body-children/Portfolio.js';
import Contact from './body-children/Contact.js';
import './Body.css';

function Body() {
    return (
        <div className = "Body__main-container">
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>
    );
  }
  
  export default Body;