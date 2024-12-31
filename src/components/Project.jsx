import projectsData from "../data/projectsData.js";
import { useState } from "react";

const Project = () => {
    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const handleClick = (id) => {
        setShow(!show)
        setSelectedId(id)
    }
    const secondHandleClick = (id) => {
        setShow(!show)
    }
    
    const classShow = show ? 'show-preview' : ''

    return (
        <div className="project-outer-box">
            {
                projectsData.map((project) => (
                    <div className="project-box" key={project.id} onClick={() => handleClick(project.id)}>
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
    
                    {project.id === selectedId && (
                    <div className={`master-preview ${classShow}`}>
                    <div className={`preview-card ${classShow}`}>
                        <div className={`preview-nav`} onClick={secondHandleClick}>
                            <i class="fa-solid fa-angle-left"></i>
                            <h2 onClick={secondHandleClick}>Back To Projects.</h2>
                        </div>
                        <div className="line"></div>
                        <div className="preview-content">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <img src={project.image} alt='project image' />
                            <h3>About</h3>
                            <p>{project.about}</p>
                            <h3>Technologies</h3>
                            <div className="techs">
                                    {
                                        project.technology.map(tech => (
                                            <div className="tech-box">
                                                {tech.tecnologies}
                                            </div>
                                        ))
                                    }
                            </div>
                            <h3>Website</h3>
                            <a href={project.url}>{project.url}</a>
                            {project.git && (
                                <span>
                                    <h3>Github</h3>
                                    <a className="last-guy" href={project.git}>{project.git}</a>
                                </span>
                            )}

                            <div className="open-proj">
                                <a href={project.url}>
                                    Open Project
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
                </div>
                ))
            }
        </div>
        
    );
}
 
export default Project;