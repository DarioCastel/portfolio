import "../css/formContact.scss";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const form = useRef();
  const [valid, setValid] = useState(true)

  const validate = () => {
    const user_name = form.current.user_name.value;
    const user_Email = form.current.user_Email.value;
    const message = form.current.message.value;

    const mailregex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (user_name === "") {
    setValid(false)
      console.log("completar userName")
      return;
    }
  
    if (user_name === "" || !mailregex.test(user_Email)) {
    setValid(false)
      console.log("completar userName")
      return;
    }
  
    if (message === "") {
    setValid(false)
      console.log("completar el mensaje")
      return;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validate();
    if (valid) {
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
    }
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
