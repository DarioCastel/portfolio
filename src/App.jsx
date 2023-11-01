import { useState } from "react";
import "./App.scss";
import { CiHome, CiRead, CiLaptop, CiPhone} from "react-icons/ci";

function App() {
  const [menu, setMenu] = useState("HOME")
  
  return (
    <>
      <main className="main-white">
        <header>
          <nav>
            <a href="#home" className={`${menu=="HOME"?"active":""}`} onClick={()=>{setMenu("HOME")}}>
              <span className="icon"><CiHome/></span>
              <span className="text">HOME</span>
            </a>
            <a href="#about" className={`${menu=="ABOUT"?"active":""}`} onClick={()=>{setMenu("ABOUT")}}>
              <span className="icon"><CiRead/></span>
              <span className="text">ABOUT</span>
            </a>
            <a href="#project" className={`${menu=="PROJECT"?"active":""}`} onClick={()=>{setMenu("PROJECT")}}>
              <span className="icon"><CiLaptop/></span>
              <span className="text">PROJECT</span>
            </a>
            <a href="#contact" className={`${menu=="CONTACT"?"active":""}`} onClick={()=>{setMenu("CONTACT")}}>
              <span className="icon"><CiPhone/></span>
              <span className="text">CONTACT</span>
            </a>
            <div className="indicador"></div>
          </nav>
        </header>
        <section id="home">home</section>
        <section id="about">about</section>
        <section id="project">project</section>
        <section id="contact">contact</section>
      </main>
    </>
  );
}

export default App;
