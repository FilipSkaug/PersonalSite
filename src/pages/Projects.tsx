import { Link  } from 'react-router-dom'
import '../styling/Projects.css'
import Vektorprogrammet from '../assets/Projects/Vektorprogrammet.png';
import Ibdb from '../assets/Projects/ibdb.png'
import Jokemaster from '../assets/Projects/jokemaster.png'

function Progjects() {
  return (
    <div className="projectWrapper">
      <Link to='/projects/vektorprogrammet'>
        <img className="project" src={Vektorprogrammet}></img>
      </Link>
      <Link to='/projects/ibdb'>
        <img className="project" src={Ibdb}></img>
      </Link>
      <Link to='//github.com/FilipSkaug/JokeMaster'>
        <img className="project" src={Jokemaster}></img>
      </Link>
      
    </div>
  );
}

export default Progjects;