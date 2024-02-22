import { Link  } from 'react-router-dom'
import vektorprogrammet from '../../assets/Projects/Vektorprogrammet.png'
import '../../styling/Project.css'

function Vektorprogrammet () {
  return (
    <div className="projectWrapper">
      <div className="projectContent">
        <Link to='https://vektorprogrammet.no/'>
          <img className={"img"} src={vektorprogrammet}></img>
        </Link>
        <div className="textbox">
          <h1>Vektorprogrammet</h1>
          <p>
            For tiden har jeg et verv i organisasjonen Vektorprogrammet. 
            Dette er en frivillig studentorganisasjon som sender ut assistenter 
            til skoler for å hjelpe med realfag. Jeg er en del av IT-teamet og 
            har en stilling som utvikler. Det vil si at jeg ikke drar ut til skoler 
            for å hjelpe, men arbeider med resten av IT-teamet et par ganger i uka. 
            Nåværende arbeid er utvikling av en ny nettside som skal lages i React 
            med typescript og en backend som bruker PHP og SQL. I dette IT-teamet, 
            som jeg har vært med i siden våren 2023, har jeg fått mye erfaring med 
            relevant arbeid i team over en lengre periode.
          </p>
          <br></br>
          <h1>Hva jeg lærte</h1>
          <p>
            I dette prosjektet har jeg fått erfare hvordan det er og utvikle et produkt i et større team,
            samtidig som jeg har forbedret meg i teknologien stacken. Det viktigste jeg har fått ut av vektorIT er hvor
            annerledes det er og finne sin plassen i en større gruppe, her er det enkelt og bli borte i mengden, derfor
            har det vært viktig å ta initiativ og gjøre meg selv tilgjengelig. Her kan heller ikke ha kontroll på alt som skjer
            som jeg ofte vil ha, og må ha lært meg å stole på at det de andre gjør er bra nok.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vektorprogrammet;