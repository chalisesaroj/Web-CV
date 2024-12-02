import React, { Profiler, useState } from "react";
import AboutForm from "./AboutForm";
import CertificationForm from "./CertificationForm";
import SkillsForm from "./SkillForm";
import ProjectForm from "./ProjectForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ContactForm from "./ContactForm";
import ProfessionalTrainingForm from "./ProfessionalTrainingForm";
import HeaderForm from "./HeaderForm";
function ParentForm() {
    const[index,setIndex]=useState(0);
    const [dataconfig, setDataConfig] = useState({
        header: {
            personname: "",
            title: ""
        },
        aboutus: "",
        education: [
            {
                degree: '',
                specialization: '',
                university: '',
                institute: '',
                startDate: "",
                endDate: ""
            }],
        certification: [{
            certificateTitle: "",
            certificateLink: ""
        }],
        contact: {
            email: "",
            phone: "",
            linkedin: "",
            github: ""
        },
        experience: [
            {
                role: '',
                company: '',
                duration: '',
                description: ['']
            }
        ],
        familiarwith: [""],
        professionaltraining: [
            {
                title: "",
                instructor: "",
                platform: "",
                duration: "",
                link: ""
            }
        ],
        projects: [{ projectname: "", projectDescription: "", projectLink: "" }],
        skills: [""]
    })
    const steps = [<HeaderForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, header: d.header })
        }} />,

    <AboutForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, aboutus: d.aboutus })
    }} />,

    <CertificationForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, certification: d })
    }} />,

    <SkillsForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, skills: d.skills })
    }} />,

    <ProjectForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, projects: d.projects })
    }} />,
    <ExperienceForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, experience: d.experience })
    }} />,
    <EducationForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, education: d.education })
    }} />,
    <ContactForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, contact: d.contact })
    }} />,
    <ProfessionalTrainingForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, professionaltraining: d.professionaltraining })
    }} />]
    return (
        <div>
      {steps[index]};
      {index>=1
      ?<button onClick={()=>setIndex(index-1)}>Back Page</button>:<p></p>}
      {index<8
      ?<button onClick={()=>setIndex(index+1)}>Next  Page</button>:<p></p>}
        </div>
    )
} export default ParentForm;
