import './Portfolio.css'
import checkMateImg from '../../img/check_mate.jpg'
import openWeatherImg from '../../img/open_weather.jpg'

function Portfolio() {
    const projects = [
      {
        title: "Check-Mate",
        subtitle: "MySQL, Express.js, Handlebars",
        description: "A full-stack application that allows users to keep track of their recurring expenses.",
        image: checkMateImg,
        link: "www.google.com"
      },
      {
        title: "OpenWeather",
        subtitle: "TailwindCSS",
        description: "Front-end application that provides weather reports from cities around the world. Powered by the OpenWeather API.",
        image: openWeatherImg,
        link: "www.google.com"
      }
    ];

    return (
      <div className="Portfolio__main-container">
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