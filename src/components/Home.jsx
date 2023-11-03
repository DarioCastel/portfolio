import astro from "../images/astro.jpg"
import "../css/home.scss"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlinePaperClip} from "react-icons/ai";

const holi = () => {
  return (
    <>
    <div className="containerHome">
        <div className="homeSection">
          <h1>Im Dario Castelnovo</h1>
          <span>A passionate frontend developer from Argentina</span>
        <div className="buttonsCo">
          <a href=""><AiOutlineGithub/></a>
          <a href=""><AiOutlineLinkedin/></a>
          <a href=""><AiOutlinePaperClip/></a>
        </div>
          </div>
        <div className="imgContainer">
          <img src={astro} alt="" />
        </div>
    </div>
    </>
  )
}

export default holi