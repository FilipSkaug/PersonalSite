import { Link  } from 'react-router-dom'
import { data } from '../../data/project';
import '../../styling/Projects.css'

import VisibilitySensor from 'react-visibility-sensor';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const handleVisibilityChange = (isVisible: boolean, index: number) => {
  const element = document.getElementById(index.toString());
  if (isVisible && element) {
    element.style.left = '5%';
    element.style.opacity = '1';
  }
};

function Projects() {
  // const [showContent, setShowContent] = useState(false);
  return (
    <div className="section" id="projects">
      {data.project.map((item, index) => (
        <div className={index % 2 === 1 ? "projectWrapper left" : "projectWrapper right"}>
          <div className="project">
            <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, index)} partialVisibility>
              <img src={item.img} style={{opacity: "0", width: "100%", height: "100%" }}/>
            </VisibilitySensor>
            <div className="img" id={index.toString()}>
              <Link to={item.link}>
                <img src={item.img} style={{ width: "100%", height: "100%" }}/>
              </Link>
            </div>
          </div>
          <div className="textbox">
            <div>
              <h1>{item.title}</h1>
              <p>
                {item.description}
              </p>
            </div>
            <div>
              <h1>Hva jeg lærte</h1>
              <p>
                {item.info}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
)}

export default Projects;