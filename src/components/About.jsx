import "../css/about.scss";
import { SiJavascript, SiHtml5, SiCss3,SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";


const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <h1 className="h1About">Sobre mi</h1>
        <p className="pAbout">
          hola soy la wea fome Estoy emocionado por la oportunidad de conectarme
          contigo. Explora mi portafolio para obtener una visión más profunda de
          mis proyectos y habilidades. ¡Si tienes una idea emocionante o
          proyecto en mente, hablemos! <br />
          <br />
          Estas son las tecnologias con las que trabajo:
        </p>
        <div className="buttonL">
          <SiJavascript className="tecnoIcon"/>
          <SiHtml5 className="tecnoIcon"/>
          <SiCss3 className="tecnoIcon"/>
          <FaReact className="tecnoIcon"/>
          <SiMongodb className="tecnoIcon"/>
        </div>
      </div>
    </>
  );
};

export default About;
