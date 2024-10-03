
import { TypeAnimation } from 'react-type-animation';

function home() {
  return(
  <div className="section home" id="home">
    <div>
      <p className="intro1">Hei,</p>
      <p className="intro2">Jeg heter Filip Skaug</p>
      <TypeAnimation
        sequence={[
          "og er it student.",
          1500,
          "og er utvikler.",
          1500,
          "og er designer.",
          1500,
          "og er kollega ?",
          1500
        ]}
        className="intro3"
        speed={30}
        deletionSpeed={20}
        repeat={Infinity}
      />
    </div>
  </div>
)}

export default home;