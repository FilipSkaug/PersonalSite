import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styling/App.css'
import {RemoveScroll} from 'react-remove-scroll';
import Sidebar from './components/Sidebar.tsx'
import MainPage from "./pages/MainPage.tsx"

function App() {
  // const [showReturnToTop, setShowReturnToTop] = useState(false);
  const [active, setActive] = useState<string>("home");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setShowReturnToTop(false);
  //     } else {
  //       setShowReturnToTop(true);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // function returnToTop() {
  //   return (
  //     <>
  //       <button className={showReturnToTop ? "returnToTop" : "returnToTop Top"} onClick={scrollToTop}>
  //         <p>Til toppen</p>
  //       </button>
  //     </>
  //   )
  // }

  return (
    <div className="mainWrapper">
      <Sidebar active={active}/>
      <RemoveScroll className="main">
        <HashRouter basename='/'>
            <Routes>
              <Route index element={<MainPage active={active} setActive={setActive}/>} />
            </Routes>
          </HashRouter>
      </RemoveScroll>
    </div>
  )
}

export default App
