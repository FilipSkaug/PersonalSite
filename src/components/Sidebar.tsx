import '../styling/Sidebar.css'
import { HiAcademicCap } from "react-icons/hi";
import { HiFolder } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiHome } from "react-icons/hi";

interface Props {
  active: string;
}

const scrollTo = (section: string): void => {
  const element = document.getElementById(section);
  element?.scrollIntoView({behavior: "smooth"});
}

const Sidebar: React.FC<Props> = ({ active }) => {
  return (
  <div className="sidebarContent">
    <div className="sidebarWrapper">
      <div className="buttonWrapper">
        <button className={`navButton ${active == "home" ? "active" : ""}`} style={{backgroundColor: "#EDE6DA"}} onClick={() => scrollTo("home")}>
          <HiHome />
        </button>
        <p>Start</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "profile" ? "active" : ""}`} style={{backgroundColor: "#BBE9FF"}} onClick={() => scrollTo("profile")}>
          <HiUserCircle />
        </button>
        <p>Om Meg</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "education" ? "active" : ""}`} style={{backgroundColor: "#A8D8B9"}} onClick={() => scrollTo("education")}>
          <HiAcademicCap />
        </button>
        <p>Erfaring</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "projects" ? "active" : ""}`} style={{backgroundColor: "#F4A6A6"}} onClick={() => scrollTo("projects")}>
          <HiFolder />
        </button>
        <p>Prosjekter</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "contact" ? "active" : ""}`} style={{backgroundColor: "#D8CDEA"}} onClick={() => scrollTo("contact")}>
          <HiMail />
        </button>
        <p>Kontakt</p>
      </div>
    </div>
  </div>
  )
}

export default Sidebar;