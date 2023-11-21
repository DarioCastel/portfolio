import "./App.scss";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home"
import Projects from "./components/Projects";

function App() {
  
  
  return (
    <>
      <main className="main-white">
        <header>
          <Header/>
        </header>
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="project"><Projects/></section>
        <section id="contact">contact</section>
      </main>
    </>
  );
}

export default App;
