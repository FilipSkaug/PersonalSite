import profilbildet from '../../assets/profilbilde.jpeg';
import '../../styling/Profile.css';

function Profile () {
  return (
    <div className="section aboutMeWrapper" id="profile">
      <div className="aboutMeRow">
        <div className="profileIntro">
          <h1>
            Hei og velkommen til min nettside!
          </h1>
          <p>
            Her har jeg samlet informasjon om meg selv, som utdanning og prosjekter jeg har jobbet med. Så ta en liten titt rundt og se hva jeg har å tilby!
          </p>
          <p>
            Jeg studerer for øyeblikket 4. året ved NTNU. I fjor fullførte jeg en Bachelorgrad i Informatikk, og dette semesteret begynte jeg på 3. klasse av Ingeniørvitenskap og IKT.
          </p>
        </div>
        <img src={profilbildet} alt="Bilde av meg" className="profilePicture"/>
      </div>

    </div>
  )
}

export default Profile;