import { Outlet, Link, useLocation } from 'react-router-dom'
import '../styling/Navigate.css'

function Navigate() {
  const location = useLocation();
  
  return (
    <>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'Link' : 'Link grey-text'}>Om meg</Link>
        <Link to="projects" className={location.pathname === '/projects' ? 'Link' : 'Link grey-text'}>Prosjekter</Link>
        <Link to="contact" className={location.pathname === '/contact' ? 'Link' : 'Link grey-text'}>Kontakt meg</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default Navigate;