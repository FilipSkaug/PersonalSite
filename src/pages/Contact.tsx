import '../styling/Contact.css';
import linkedIn from '../assets/icons/linkedin.svg';
import gmail from '../assets/icons/gmail.svg';
import message from '../assets/icons/message.svg';

function Contact() {
  function copyToClipboard() {
    alert("Nummer: +47 93642443");
  }

  return (
    <>
      <div className="contactWrapper">
        <a href="https://www.linkedin.com/in/filip-skaug/">
          <img src={linkedIn} alt="LinkedIn" className="icons"/>
        </a> 
        <a href="mailto:filipskaug443@gmail.com">
          <img src={gmail} alt="Gmail" className="icons"/>
        </a>
        <a onClick={copyToClipboard}>
          <img src={message} alt="message" className="icons"/>
        </a>
      </div>
    </>
  )
}

export default Contact;