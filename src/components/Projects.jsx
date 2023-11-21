import "../css/projects.scss";
import CardProject from "./CardProject";
import anime from "../images/animepage.png"

const Projects = () => {

    const listProject = [
        {
            id:100,
            title:"Pagina anime",
            description: "pagina hecha a sudor y lagrimas",
            img:`${anime}`,
        },{
            id:99,
            title:"Proyecto 2",
            description: "pagina 2",
            img:`${anime}`,
        },{
            id:98,
            title:"Pagina anime",
            description: "pagina hecha a sudor y lagrimas",
            img:`${anime}`,
        }
    ]
  return (
    <>
      <div className="containerProjects">
        <div className="titleProjects">
          <h1>my projects</h1>
        </div>
        <div className="contentProject">
            {listProject.map((item)=>(
                <CardProject
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                />

            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
