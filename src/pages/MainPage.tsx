import VisibilitySensor from 'react-visibility-sensor';
import '../styling/MainPage.css';
import Home from './sections/home';
import Profile from './sections/profile';
import Education from './sections/education';
import Projects from './sections/projects';
import Contact from './sections/contact';

interface Props {
  active: string;
  setActive: (active: string) => void;
}

const handleVisibilityChange = ( isVisible: boolean, setActive: (active: string) => void, id: string, color: string) => {
  if (isVisible) {
    document.body.style.backgroundColor = color;
    setActive(id);
  }
};

const MainPage: React.FC<Props> = ({ setActive }) => {
  return(
    <>
      <div className="containment" id="containment"></div>
      <div className="MainPageWrapper">
        <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, setActive, "home", "#000000")} partialVisibility containment={document.getElementById("containment")}>
          <Home />
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, setActive, "profile", "#BBE9FF")} partialVisibility containment={document.getElementById("containment")}>
          <Profile />
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, setActive, "education", "#D9CFEF")} partialVisibility containment={document.getElementById("containment")}>
          <Education />
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, setActive, "projects", "#F4A6A6")} partialVisibility containment={document.getElementById("containment")}>
          <Projects />
        </VisibilitySensor>
        <VisibilitySensor onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, setActive, "contact", "#D8CDEA")} partialVisibility containment={document.getElementById("containment")}>
          <Contact />
        </VisibilitySensor>
      </div>
    </>
  )
}

export default MainPage;