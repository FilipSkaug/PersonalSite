import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styling/App.css'
import Sidebar from './components/Sidebar.tsx'
import Navigate from "./pages/Navigate.tsx"
import AboutMe from "./pages/AboutMe.tsx"
import Projects from "./pages/Projects.tsx"
import Contact from "./pages/Contact.tsx"

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showReturnToTop, setShowReturnToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowReturnToTop(false);
      } else {
        setShowReturnToTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function showSiderbarHadler() {
    setShowSidebar(!showSidebar);
  }

  
  
  function sidebarButton() {
    return (
      <> 
        <button className={showSidebar ? "sidebarButton" : "sidebarButton closed"} onClick={showSiderbarHadler}>
          <i className="arrow"></i>
        </button>
      </>
    )
  }

  function returnToTop() {

    return (
      <>
        <button className={showReturnToTop ? "returnToTop" : "returnToTop Top"} onClick={scrollToTop}>
          <p>Til toppen</p>
        </button>
      </>
    )
  }

  return (
    <>
      <Sidebar showSidebar={showSidebar} />
      <div className={showSidebar ? "content" : "content closed"}>
        <BrowserRouter basename="/PersonalSide">
          <Routes>
            <Route path="/" element={<Navigate />}>
              <Route index element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {sidebarButton() }
      {returnToTop() }

    </>
  )
}

export default App
