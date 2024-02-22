import { Link  } from 'react-router-dom'
import ibdb from '../../assets/Projects/ibdb.png'
import '../../styling/Project.css'

function Ibdb () {
  return (
    <div className="projectWrapper">
      <div className="projectContent">
        <Link to='https://ibdb-743f5.firebaseapp.com/'><img className={"img"} src={ibdb}></img></Link>
        <div className="textbox">
          <h1>IBDB</h1>
          <p>
            IBDb - Internet Book Database, er en nettside inspirert av IMDb. På dette nettstedet kan du søke etter bøker, 
            forfattere og lese om hver enkelt bok. Du kan opprette en brukerkonto og gi vurderinger for bøkene du har lest, 
            for å hjelpe andre med å bestemme hvilken bok de ønsker å lese. Dette prosjektet var en del av et fag jeg hadde 
            i mitt andre år. Vi var en gruppe på seks studenter som samarbeidet om å utvikle en frontend med React og en 
            backend med Firebase.
          </p>
          <br></br>
          <h1>Hva jeg lærte</h1>
          <p>
            I dette prosjektet erfarte jeg både hvordan jeg jobber i et mellomstort team, og hvordan jeg jobber med et prosjekt med en teknologi stack
            som ikke jeg eller noen andre i teamet hadde vært borti før. Her måtte vi legge inn ekstra innsats for å passe på at alle i teamet hang med
            I utviklingen av prosjektet med tanke på hvor mye som var nytt, vi løste dette ved blant annet en god scrum struktur med daglige stand up.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ibdb;