import "../css/formContact.scss";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const form = useRef();

  const validate = (e) => {
    const username1 = e.target.user_name.value;
    const email = e.target.user_Email.value;

    if (username1 == "" || email == "") {
      console.log("completar campos")
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validate();

    emailjs
      .sendForm(
        "service_bl2idx9",
        "template_rg1e85m",
        form.current,
        "aghokcv3l9xzt0U9m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="user_name" />
        <input placeholder="Email" type="email" name="user_Email" />
        <textarea
          placeholder="Write your message here.."
          name="message"
          rows="4"
        ></textarea>
        <button type="submit">SEND </button>
      </form>
    </>
  );
};

export default FormContact;
