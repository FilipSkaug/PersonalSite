import '../styling/AboutMe.css';
import profilbilde from '../assets/profilbilde2.jpeg';

function AboutMe() {
  return (
    <>
      <div className="aboutMeWrapper">
        <div className="aboutMeRow">
          <div className="textbox">
            <h1>Om meg</h1>
            <p>
              Jeg heter Filip og studerer for øyeblikket 3-året på bachelor i informatikk ved NTNU. 
              Jeg er fornøyd med studiet å planlegger derfor å ta master i informatikk, 
              og ser fram til å arbeide innenfor IT-sekoren.
            </p>
          </div>
          <img className="imageBox" id="profilbilde2" src={profilbilde}></img>
        </div>
        <div className="aboutMeRow">
          <img className="imageBox" id="profilbilde2" src={profilbilde}></img>
          <div className="textbox">
            <h1>Overskrift</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus nibh, mattis ut massa laoreet, 
            laoreet hendrerit augue. Donec varius metus tincidunt est egestas elementum. Etiam mauris est, 
            rhoncus lobortis efficitur ut, posuere sed augue. Vestibulum gravida lacus vitae mauris aliquet 
            pretium in eu libero. Donec luctus vestibulum dui ac varius. Duis pretium lobortis leo nec fermentum. 
            Suspendisse vulputate nibh in mauris ullamcorper tincidunt.
            </p>
          </div>
        </div>
        <div className="aboutMeRow">
          <div className="textbox">
            <h1>Overskrift</h1>
            <p>
            Nullam maximus orci enim, eu blandit tortor volutpat convallis. Ut pellentesque molestie fringilla. 
            Cras id metus arcu. Aliquam lacus tellus, volutpat bibendum nulla ut, pellentesque facilisis ligula.
             Nunc condimentum cursus elementum. Aenean at magna molestie, lacinia.
            </p>
          </div>
          <img className="imageBox" id="profilbilde2" src={profilbilde}></img>
        </div>
        <div className="aboutMeRow">
          <img className="imageBox" id="profilbilde2" src={profilbilde}></img>
          <div className="textbox">
            <h1>Overskrift</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus nibh, mattis ut massa laoreet, 
            laoreet hendrerit augue. Donec varius metus tincidunt est egestas elementum. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;