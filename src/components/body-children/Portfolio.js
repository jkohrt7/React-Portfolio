import './Portfolio.css'
import checkMateImg from '../../img/check_mate.jpg'
import openWeatherImg from '../../img/open_weather.jpg'
import FriendForceImage from '../../img/FriendForce.jpg'
import CustardCrewImage from '../../img/custard_crew.jpg'

function Portfolio() {
    const projects = [
      {
        title: "Custard Crew",
        subtitle: "React, TailwindCSS, Node.js",
        description: "A landing page for a group that streams DnD on Twitch.",
        image: CustardCrewImage,
        link: "https://jkohrt7.github.io/Custard_Crew/"
      },
      {
        title: "FriendForce",
        subtitle: "React, MongoDB, Express",
        description: "Full-stack MERN application. Friendforce is a CMS for hobbyists and friend groups.",
        image: FriendForceImage,
        link: 'https://warm-ravine-56602.herokuapp.com/login'
      },
      {
        title: "Check-Mate",
        subtitle: "MySQL, Express.js, Handlebars",
        description: "A full-stack application that allows users to keep track of their recurring expenses.",
        image: checkMateImg,
        link: "https://check-mate-finance-tool.herokuapp.com/"
      },
      {
        title: "OpenWeather",
        subtitle: "TailwindCSS, Node.js",
        description: "Front-end application that provides weather reports from cities around the world. Powered by the OpenWeather API.",
        image: openWeatherImg,
        link: "https://jkohrt7.github.io/Weather_Dashboard_V2/"
      }

    ];

    return (
      <div className="Portfolio__main-container" id = "portfolio">
        <div className="Portfolio__title">
          Portfolio
        </div>

        <div className='Portfolio__projects-container'>
          {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="Portfolio__link-container">
                <div className="Portfolio__individual-project-container">
                  <img
                    alt="gallery"
                    className="Portfolio__img-bg"
                    src={project.image}
                  />
                  <div className="Portfolio__description">
                    <h2 className="Portfolio__subtitle">
                      {project.subtitle}
                    </h2>
                    <h2 className="Portfolio__project-title">
                      {project.title}
                    </h2>
                    <p className="Portfolio__indented-paragraph">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;