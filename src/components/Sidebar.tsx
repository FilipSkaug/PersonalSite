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
        <button className={`navButton ${active == "home" ? "active" : ""}`} style={{backgroundColor: "#BBE9FF"}} onClick={() => scrollTo("home")}>
          <HiHome />
        </button>
        <p>Start</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "profile" ? "active" : ""}`} style={{backgroundColor: "#FDFD96"}} onClick={() => scrollTo("profile")}>
          <HiUserCircle />
        </button>
        <p>Om Meg</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "education" ? "active" : ""}`} style={{backgroundColor: "#e0d6ff"}} onClick={() => scrollTo("education")}>
          <HiAcademicCap />
        </button>
        <p>Erfaring</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "projects" ? "active" : ""}`} style={{backgroundColor: "#c2efaa"}} onClick={() => scrollTo("projects")}>
          <HiFolder />
        </button>
        <p>Prosjekter</p>
      </div>
      <div className="buttonWrapper">
        <button className={`navButton ${active == "contact" ? "active" : ""}`} style={{backgroundColor: "#FF8787"}} onClick={() => scrollTo("contact")}>
          <HiMail />
        </button>
        <p>Kontakt</p>
      </div>
    </div>
  </div>
  )
}

export default Sidebar;