import "../css/cardProject.scss";

const CardProject = ({title,description,img}) => {
    const estiloComponente = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"
      };
  return (
    <>
      <div className="contentCard">
        <div className="wrapper">
          <div className="banner-image" style={estiloComponente}> </div>
          <h1> {title}</h1>
          <p>
            {description}
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn outline">Page</button>
          <button className="btn fill">GITHUB</button>
        </div>
      </div>
    </>
  );
};

export default CardProject;
