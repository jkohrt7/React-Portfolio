import './AboutMe.css'
import jsImg from '../../img/javascript.png';
import javaImg from '../../img/java.png';
import reactImg from '../../img/react.png';
import mongoDb from '../../img/mongodb-logo.png';
import cssImg from '../../img/CSS.png';
import rImg from '../../img/R-logo.png'

function AboutMe () {
    return (
        <div className="AboutMe__main-container" id = "about-me">
            <div className = "AboutMe__text">
                <div className = "AboutMe__title-text">About Me</div>
                <p className = "AboutMe__indented-paragraph">
                    I'm a recent Computer Science graduate of Furman University and an amateur web developer with a full-stack development certification from UNC Chapel Hill. Three years of undergraduate research have given me a lot of experience with Java, Python, and the R statistical language, while my time at UNC has given me the skills to create full-stack applications with MongoDB, Express.js, React and Node.js. 
                </p>
                <p className = "AboutMe__indented-paragraph">
                    Besides web-dev, I enjoy creating 3D models, backpacking, and conservation-driven research. I'm always looking for ways to incorporate these into my personal projects, but I haven't managed to combine all three yet!
                </p>
                
            </div>

            <div className = "AboutMe__skills">
                <img src = {jsImg}></img>
                <img src = {reactImg}></img>
                <img src = {mongoDb}></img>
                <img src = {rImg}></img>
                <img src = {javaImg}></img>
                <img src = {cssImg}></img>
            </div>
        </div>
    )
}

export default AboutMe;