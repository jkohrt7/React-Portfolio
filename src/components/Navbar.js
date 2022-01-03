import './Navbar.css'

function Toolbar() {
    //on scroll event check if document.body.scrollTop === 0
    //if it is then set a var equal to transparent (?)

    window.addEventListener('scroll', handleScrollEvent);

    function handleScrollEvent(event) {
        const navbarBg = document.querySelector(".Navbar__sticky-bg");
        let positionY = window.scrollY;
        if(positionY !== 0) {
            navbarBg.style.backgroundColor = "var(--violet)";
        }
        else {
            navbarBg.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
        
    }

    return (
        <div className = "Navbar__sticky-bg">
            <div className = "Navbar__content-container">

                {/* Logo and Initials */}
                <div id = "Navbar__logo-container">
                    <a id = "Navbar__logo-link-container" href = "#top">
                        <svg xmlns="http://www.w3.org/2000/svg" className ="Navbar__SVG" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        <span className = "Navbar__logo-text">JK</span>
                    </a>
                </div>

                {/* Navigation Links */}
                <div id= "Navbar__selection-container" className = "flex hidden text-white text-lg md:flex items-center md:relative space-x-6 py-2 px-3">
                        
                        <a className= "Navbar__navigation-button" href="#portfolio">Portfolio</a>
                        <a className= "Navbar__navigation-button" href="#contact">Contact</a>
                        <a className= "Navbar__navigation-button" href="https://docs.google.com/document/d/1C6agndc-HKKnqhif_lM-BofTy1lBhqNn/edit?usp=sharing&ouid=107624104752009449706&rtpof=true&sd=true">Resume</a>
                        <a className= "Navbar__navigation-button" href="#about-me">About</a>

                </div>
            </div>
        </div>
    );
}

export default Toolbar;