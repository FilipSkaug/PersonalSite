import '../styling/AboutMe.css';
import profilbilde2 from '../assets/profilbilde2.jpeg';
import teltTur from '../assets/telttur.jpg';
import sti from '../assets/sti.jpg';

function AboutMe() {
  return (
    <>
      <div className="aboutMeWrapper">
        <div className="aboutMeRow">
          <div className="textbox">
            <h1>Om meg</h1>
            <p>
              Jeg heter Filip og studerer for øyeblikket 3-året på Bachelor i informatikk ved NTNU. 
              Jeg er fornøyd med studiet å planlegger derfor å ta Master i informatikk, 
              og ser fram til å arbeide innenfor IT-sektoren.
            </p>
          </div>
          <img className="imageBox" id="profilbilde2" src={profilbilde2}></img>
        </div>
        <div className="aboutMeRow">
          <div className="textbox">
            <h1>Stien til Informatikk</h1>
            <p>
              Jeg har alltid vært interessert i hvordan ting fungerer. Og jeg startet derfor
              på en videregående skole med fordypning i både Realfag, Data og Elektronikk. Hvor jeg blant annet
              ble jeg introdusert til webutvikling og mikrokontrollere som Arduino og Raspberry Pi, dette videre har utviklet
              seg til en viktig hobby.
              <br></br>
              Jeg synes at programmering delen av mikrokontrollerene var mye mer utfordrende og givende, og bestemte meg
              for å lete etter studier som var rettet mot programmering. Hvor jeg her har videre utviklet interesse innenfor
              webutvikling og UX-design.
            </p>
          </div>
          <img className="imageBox" id="sti" src={sti}></img>
        </div>
        <div className="aboutMeRow">
          <img className="imageBox" id="teltTur" src={teltTur}></img>
          <div className="textbox">
            <h1>Andre interesser</h1>
            <p>
              Jeg er utrolig glad i friluft å natur, så når du ikke finner meg foran en skjerm
              er jeg mest sansynlig på fjellet, enten i en hytte eller i en hengekøye.
            </p>
            <p>
              Jeg er også glad i å prøve ut nye utfordringer, så om det er buldring, curlig eller andre nye 
              ting er jeg alltid med.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;