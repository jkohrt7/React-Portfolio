import './Contact.css'
import jaredImg from '../../img/Jared_kohrt_picture.jpg'

function Contact() {
    return (
      <div className="Contact__main-container" id = "contact">
        <div className = "Contact__title">
          Contact
        </div>
        <div className = "Contact__container">
          <img className = "Contact__img" src = {jaredImg}></img>
            <div className = "Contact__info">

              <div className = "Contact__option">
                  <svg className = "h-8" xmlns="http://www.w3.org/2000/svg" className = "Contact__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg> 
                  <h2 className= "sm:text-lg md:text-2xl pl-6">(336) 908-2364</h2>
              </div>

              <div className = "Contact__option">
                  <svg className = "h-8" xmlns="http://www.w3.org/2000/svg" className = "Contact__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className= "md:text-2xl pl-6">jkohrt7@gmail.com</h2>
              </div>

              <div className = "Contact__option">
                  <a href="https://github.com/jkohrt7">
                    <svg xmlns="http://www.w3.org/2000/svg" className = "Contact__svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <h2 className= "md:text-2xl pl-6">github.com/jkohrt7</h2>
              </div>

            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;