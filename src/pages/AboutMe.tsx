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
              Jeg heter Filip Skaug og studerer for øyeblikket 3.-året på Bachelor Informatikk ved NTNU. Jeg er fornøyd med 
              studiet og planlegger derfor å ta Master i Informatikk og ser fram til å arbeide innenfor IT-sektoren.
            </p>
          </div>
          <img className="imageBox" id="profilbilde2" src={profilbilde2}></img>
        </div>
        <div className="aboutMeRow">
          <div className="textbox">
            <h1>Stien til Informatikk</h1>
            <p>
              Jeg har alltid vært interessert i hvordan ting fungerer., og startet derfor på en videregående skole med fordypning i 
              både Realfag, Data og Elektronikk. Her ble jeg blant annet introdusert for webutvikling og mikrokontrollere som 
              Arduino og Raspberry Pi, noe som senere har utviklet seg til en viktig hobby.
              <br></br>
              Jeg synes at programmeringsdelen av mikrokontrollerene var mye mer utfordrende og givende, og bestemte meg for å lete etter 
              studier rettet mot programmering. På NTNU har jeg videreutviklet interesse innenfor webutvikling og UX-design.
            </p>
          </div>
          <img className="imageBox" id="sti" src={sti}></img>
        </div>
        <div className="aboutMeRow">
          <img className="imageBox" id="teltTur" src={teltTur}></img>
          <div className="textbox">
            <h1>Andre interesser</h1>
            <p>
              Jeg er utrolig glad i friluft og natur, så når du ikke finner meg foran en skjerm
              er jeg mest sannsynlig på fjellet, enten i en hytte eller i en hengekøye.
            </p>
            <p>
              Jeg er også glad i og prøve ut nye utfordringer, så om det er buldring, curlig eller andre nye 
              ting er jeg alltid med.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;