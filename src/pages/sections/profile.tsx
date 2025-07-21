import profilbildet from '../../assets/profilbilde.jpeg';
import '../../styling/Profile.css';

function Profile () {
  return (
    <div className="section aboutMeWrapper" id="profile">
      <div className="aboutMeRow">
        <div className="profileIntro">
          <h1>
            Velkommen til min nettside!
          </h1>
          <p>
            <span className="mute">Her har jeg samlet litt</span> informasjon om meg selv. <span className="mute">Så ta en liten titt rundt og se hva jeg har å tilby</span>
          </p>
        </div>
        <img src={profilbildet} alt="Bilde av meg" className="profilePicture"/>
      </div>

    </div>
  )
}

export default Profile;