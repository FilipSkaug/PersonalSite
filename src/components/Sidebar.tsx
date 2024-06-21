import '../styling/Sidebar.css'
import profilbilde from '../assets/profilbilde.jpeg';
import { HiAcademicCap } from "react-icons/hi";
import { HiFolder } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiHome } from "react-icons/hi";

function Sidebar() {
  return (
  <div className="sidebarWrapper">
    <div className="buttonWrapper">
      <button className="navButton" style={{backgroundColor: "#BBE9FF"}}>
        <HiHome />
      </button>
      <p>Start</p>
    </div>
    <div className="buttonWrapper">
      <button className="navButton" style={{backgroundColor: "#c2efaa"}}>
        <HiFolder />
      </button>
      <p>Prosjekter</p>
    </div>
    <div className="buttonWrapper">
      <button className="navButton" style={{backgroundColor: "#FDFD96"}}>
        <HiUserCircle />
      </button>
      <p>Om Meg</p>
    </div>
    <div className="buttonWrapper">
      <button className="navButton" style={{backgroundColor: "#e0d6ff"}}>
        <HiAcademicCap />
      </button>
      <p>Erfaring</p>
    </div>
    <div className="buttonWrapper">
      <button className="navButton" style={{backgroundColor: "#FF8787"}}>
        <HiMail />
      </button>
      <p>Kontakt</p>
    </div>
  </div>
  )
}

export default Sidebar;