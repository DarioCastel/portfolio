import { useState } from "react";
import "../css/contact.scss";
import Alert from "./Alert";
import FormContact from "./FormContact";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [error, setError] = useState({
    textError: "",
    typeError: "",
    active: "",
  });
  return (
    <>
      <Alert
        textError={error.textError}
        typeError={error.typeError}
        active={error.active}
      />
      <div className="contactCont">
        <h2 className="h2Contact">contact me</h2>
        <div className="contact-form">
          <FormContact setError={setError} />
        </div>
        <div className="infoPersonal">
          <a
            href="https://wa.me/5493764211005"
            className="wasap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="whatsappCont">
              <span className="whatsappText">
              whatsapp me<FaWhatsapp /><br/>
              </span>
              +543764211005
            </div>
            

          </a>
          <a
            href="lecastelnovo@gmail.com"
            className="mailContact"
            target="_blank"
            rel="noreferrer"
          >
            <div className="emailCont">
              <span className="emailText">
              mail me<HiOutlineMail /><br/>
              </span>
              lecastelnovo@gmail.com
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
