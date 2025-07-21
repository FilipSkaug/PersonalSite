
import { TypeAnimation } from 'react-type-animation';

function home() {
  return(
  <div className="section home" id="home">
    <p className="intro1">Hei,</p>
    <p className="intro2">Jeg heter Filip Skaug</p>
    <p className="intro3">
      <TypeAnimation
        sequence={[
          "og er student.",
          1500,
          "og er utvikler.",
          1500,
          "og er designer.",
          1500,
          "og er kollega?",
          1500
        ]}
        speed={30}
        deletionSpeed={20}
        repeat={Infinity}
      />
    </p>
  </div>
)}

export default home;