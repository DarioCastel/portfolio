import { useState } from "react";
import "../css/contact.scss";
import Alert from "./Alert";
import FormContact from "./FormContact";


const Contact = () => {
  const [error, setError] = useState(
    {
      textError:"",
      typeError:"",
      active:""
    }
  )
  return (
    <>
      <div className="contact-form-container">
        <Alert 
        textError={error.textError}
        typeError={error.typeError}
        active={error.active}
        />
        <div className="contact-us">
          <div className="contact-header">
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div className="social-bar">
            <ul>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
              <li>
                <i className="fab fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoPersonal">
        <a href="https://wa.me/5493764211005" className="wasap"  target="_blank" rel="noreferrer">
          wasapeame
        </a>
        <a href="lecastelnovo@gmail.com" className="mailcontact" target="_blank" rel="noreferrer">mail me</a>
        </div>
        <div className="contact-form">
          <FormContact
          setError={setError}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
