import React from "react";
function ProjectForm({ data, setData }) {
    return (
        <div >
          {data.projects.map((project, index) => (
           <div key={index}>
             <input  value={project.projectname} placeholder="project name" onChange={(e) => {
                const newProjects = [...data.projects];
                newProjects[index].projectname = e.target.value;
                setData({ ...data, projects: newProjects });
            }}></input>
               <input key={index} value={project.projectDescription} placeholder="project description" onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[index].projectDescription = e.target.value;
                    setData({ ...data, projects: newProjects });
                }}></input>
                <input key={index} value={project.projectLink} placeholder="project Link" onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[index].projectLink = e.target.value;
                    setData({ ...data, projects: newProjects });
                }}></input>
           </div>
        
        
        
        
        
        
        
        ))}
            
            <button onClick={() => {
                const newprojectArray = [...data.projects, { projectname: "", projectDescription: "", projectLink: "" }];
                setData({ ...data, projects: newprojectArray })
            }}>Add Projects</button>
            <br></br>
        </div >

    )
} export default ProjectForm;

