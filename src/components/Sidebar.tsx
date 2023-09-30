import '../styling/Sidebar.css'
import profilbilde from '../assets/profilbilde.jpeg';

function Sidebar(props: any) {
  const { showSidebar } = props;

  return (
    <div className={showSidebar ? "sidebarWrapper" : "sidebarWrapper closeSidebar"}>
      <div className="profil">
        <img className="profilbilde" src={profilbilde}></img>
        <h1>Filip_Skaug</h1>
        <p>Student</p>
      </div>
      <div className="info">
        <h2>Detaljer</h2>
        <p>Informatikk (3-år)</p>
        <p>Asker</p>
        <p>Norge</p>
        <p>93642443</p>
        <a href="mailto:filipskaug443@gmail.com">Filipskaug443@gmail.com</a>  
      </div>
      <div className="info">
        <h2>Link</h2>
        <a href="https://www.linkedin.com/in/filip-skaug/">Linkedin</a>
      </div>

    </div>
  )
}

export default Sidebar;