import React from 'react';
const project = [{
    projectName: "News Website:React",
    projectLink: "https://chalisesaroj.github.io/REACT-NEWS-WEBSITE"
}, {
    projectName: "Blogging Rest API",
    projectLink: "https://github.com/chalisesaroj/bloggingApplication"
}
]
function Projects() {
    return (
        <section className="skills">
            <h2>Projects</h2>
            <ul>
                {project.map((proj, ind) => (
                    <li key={ind}><a href={proj.projectLink}>{proj.projectName}</a></li>
                ))}

            </ul>
        </section>
    );
}

export default Projects;
