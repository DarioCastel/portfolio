import "../css/formContact.scss";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = ({setError}) => {
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
      setError({
        textError:"completar campo nombre",
        typeError:"text",
        active:"active"
      })
      return;
    }
  
    if (user_name === "" || !mailregex.test(user_Email)) {
    setValid(false)
    setError({
      textError:"completar campo Email",
      typeError:"text",
      active:"active"
    })
      return;
    }
  
    if (message === "") {
    setValid(false)
    setError({
      textError:"completar campo mensaje",
      typeError:"text",
      active:"active"
    })
      return;
    }
    setValid(true)
  };

  const sendEmail = async(e) => {
    e.preventDefault();
    validate();
    if (valid) {
      try {
        await emailjs.sendForm('service_ht2egk6', 'Contact_Form', form.current, 'd1coGa8C7PSe-s7fy');

        setError({
          textError:"mensaje enviado",
          typeError:"success",
          active:"active"
        })
        
      } catch (error) {
        setError({
          textError:"mensaje NO enviado",
          typeError:"error",
          active:"active"
        })
      }
    }
    setTimeout(()=>{
      setError({
        textError:"",
        typeError:"",
        active:""
      })

    },5000)
  }
  ;

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
