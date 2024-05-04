import projectsData from "../data/projectsData.js";

const Project = () => {
    const projectbox = projectsData.map(project =>{
        return(
            <div className="project-box" key={project.id}>
                <div className="image-box">
                    <img src={project.image} alt="projectimages" />
                </div>
                <div className="bottom">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <div className="techs">
                            {
                                project.technology.map(tech => (
                                    <div className="tech-box">
                                        {tech.tecnologies}
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        )
    }
)
    return (
        <div className="project-outer-box">
            {projectbox}
        </div>
    );
}
 
export default Project;