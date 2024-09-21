
import { TypeAnimation } from 'react-type-animation';

function home() {
  return(
  <div className="section home" id="home">
    <div>
      <p style={{fontSize: "1.5rem", fontFamily: 'AbrilFatface'}}>Hei,</p>
      <p style={{fontSize: "4rem", fontFamily: 'lebora'}}>Jeg heter Filip Skaug</p>
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
        speed={30}
        deletionSpeed={20}
        style={{ fontSize: '2rem', fontFamily: 'AbrilFatface'}}
        repeat={Infinity}
      />
    </div>
  </div>
)}

export default home;