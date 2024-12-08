import React, { Profiler, useState, useEffect } from "react";
import AboutForm from "./AboutForm";
import CertificationForm from "./CertificationForm";
import SkillsForm from "./SkillForm";
import ProjectForm from "./ProjectForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ContactForm from "./ContactForm";
import ProfessionalTrainingForm from "./ProfessionalTrainingForm";
import HeaderForm from "./HeaderForm";
import './formStyling.css';
import { Button, InputLabel, Stack } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ButtonGroup from '@mui/material/ButtonGroup';
import PdfGenerator from "../pdf";

import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
function ParentForm() {
    const [index, setIndex] = useState(0);
    const buttons = [
        <Button variant={index===0?"contained":"outlined"} key="zero" onClick={()=>setIndex(0)}>Basic Details</Button>,
        <Button variant={index===1?"contained":"outlined"}key="one" onClick={()=>setIndex(1)}>Describe yourself</Button>,
        <Button variant={index===2?"contained":"outlined"}key="two" onClick={()=>setIndex(2)}>Experience</Button>,
        <Button variant={index===3?"contained":"outlined"}key="three" onClick={()=>setIndex(3)}>Education</Button>,
        <Button variant={index===4?"contained":"outlined"}key="four" onClick={()=>setIndex(4)}>Certifications</Button>,
        <Button variant={index===5?"contained":"outlined"} key="five" onClick={()=>setIndex(5)}>Skills</Button>,
        <Button variant={index===6?"contained":"outlined"} key="six" onClick={()=>setIndex(6)}>Professional training</Button>,
        <Button variant={index===7?"contained":"outlined"} key="seven" onClick={()=>setIndex(7)}>Projects</Button>,
        <Button variant={index===8?"contained":"outlined"}key="eight" onClick={()=>setIndex(8)}>Contacts</Button>,
    ];

    const [photo, setPhoto] = useState(null);
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


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
    const [CvDisplay, setCvDisplay] = useState(false);
    const testing = (() => {
        setDataConfig({
            header: {
                personname: "Saroj Chalise",
                title: "Mechanical Engineer | Software Developer"
            },
            aboutus: " An experienced engineer with hands-on experience in web development and seeking to further grow in the field of ERP system and advanced web solutions.Dedicated to contributing my skills and knowledge to build efficient and scalable applications that drive organizational success.",
            education: [
                {
                    degree: 'Bachelors',
                    specialization: 'Mechanical Engineering',
                    university: 'Tribhuwan University',
                    institute: 'IOE Pulchowk Campus',
                    startDate: "2011-01-12",
                    endDate: "2014-11-12"
                },
                {
                    degree: 'Masters',
                    specialization: 'Mechanical System Design and Engineering',
                    university: 'Tribhuwan University',
                    institute: 'IOE Pulchowk Campus',
                    startDate: "2017-07-12",
                    endDate: "2019-12-12"
                }],
            certification: [{
                certificateTitle: "AWS Certified Solution Architect",
                certificateLink: ""
            }],
            contact: {
                email: "chalisesaroj639@gmail.com",
                phone: "+977-9846285132",
                linkedin: "https://www.linkedin.com/in/saroj-chalise-9974b2a5/",
                github: "https://github.com/chalisesaroj"
            },
            experience: [
                {
                    role: 'Software Developer',
                    company: '4G Engineering and Developer Private Limited',
                    duration: 'Sep 2022 - Present',
                    description: ['Designed and implemented RESTful APIs for Vehicle Record Management using Spring,Hibernate and MYSQL',
                        ' Secured endpoints with Spring Security and developed login/logout and forgot-password ',
                        'Optimized database queries and ensured high performance, handling large-scale vehicle records efficiently',
                        'Developed the interactive front end with UI/UX integrating with the Rest API']
                },
                {
                    role: 'React Developer',
                    company: 'Voyager IT Private Limited',
                    duration: 'Oct 2023 - Aug 2024- Part Time',
                    description: ['Developed responsive and dynamic UI components using React',
                        ' Integrated front-end applications with RESTful APIs.. ',
                    ]

                }
            ],
            familiarwith: ["AWS Cloud Computing", "CI/CD", "Microservices"],
            professionaltraining: [
                {
                    title: "JAVA Programming Master Class",
                    instructor: "Tim Buchalka",
                    platform: "www.udemy.com",
                    duration: "132 hours",
                    link: "https://www.udemy.com/course/java-the-complete-java-developer-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=ROW-English&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_162511579404_._ad_696197165418_._kw__._de_c_._dm__._pl__._ti_aud-2268488108639%3Adsa-1677053911088_._li_9070019_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp455sfmfT148TCK5BFne_h5UHoUebI5nSz_3x-wGx-4HwGtDrCvVXoMhoCErcQAvD_BwE&couponCode=BFCPSALE24"
                },
                {
                    title: "JAVA Data Structures and Algorithms Master Class",
                    instructor: "Elshad Karimov",
                    platform: "www.udemy.com",
                    duration: "46.5 hours",
                    link: "https://www.udemy.com/course/java-data-structures-and-algorithms-masterclass/?srsltid=AfmBOoph_c_rdX4AZhiC6MzBVU5hdbnz58ZjhOxyhdflifHRm8jWj22J&couponCode=BFCPSALE24"
                },
                {
                    title: "Building Real-Time REST APIs with Spring Boot - Blog App",
                    instructor: "Ramesh Fadatare",
                    platform: "Java Guides via Udemy",
                    duration: "33.5 hours",
                    link: "https://www.udemy.com/course/building-real-time-rest-apis-with-spring-boot/?srsltid=AfmBOoq9tYH7stprmYxttdG-ZAkZr95Hov5DeXqR750k2AHPl4CAaUAe&couponCode=BFCPSALE24"
                },
                {
                    title: "Selenium WebDriver with Java - Basics to Advanced+Frameworks",
                    instructor: "Rahul Shetty",
                    platform: "www.udemy.com",
                    duration: "55.5 hours",
                    link: "https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/?srsltid=AfmBOoo2blx_jshJJ-sXLLoZisnx0fYngrKX_73Wgnb6LS7Awnxrxswb&couponCode=BFCPSALE24"
                }
            ],
            projects: [{
                projectname: "News Website:React",
                projectLink: "https://chalisesaroj.github.io/REACT-NEWS-WEBSITE"
            }, {
                projectname: "Blogging Rest API",
                projectLink: "https://github.com/chalisesaroj/bloggingApplication"
            },
            {
                projectname: "CV maker",
                projectLink: "https://github.com/chalisesaroj/Web-CV"
            }],
            skills: ["Java , Spring", "JavaScript, React", "HTML,CSS", "Bootstrap,Material UI", "Bootstrap", "MYSQL,Rest API"]
        })
    })
    useEffect(() => {
        testing();
    }, [])
    const steps = [<HeaderForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, header: d.header })
    }} />,

    <AboutForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, aboutus: d.aboutus })
    }} />,
    <ExperienceForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, experience: d.experience })
    }} />,

    <EducationForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, education: d.education })
    }} />,

    <CertificationForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, certification: d })
    }} />,

    <SkillsForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, skills: d.skills })
    }} />,
    <ProfessionalTrainingForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, professionaltraining: d.professionaltraining })
    }} />,

    <ProjectForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, projects: d.projects })
    }} />,


    <ContactForm data={dataconfig} setData={(d) => {
        setDataConfig({ ...dataconfig, contact: d.contact })
    }} />,
    ]
    return (
        <div className="CVContainer" >
    <div className="webCVHeader"> <h1 style={{textAlign:"center"}}>A Web CV Maker Application</h1></div>
            {index<steps.length?
            <div className="three-column-container" >
                {/* left navigationn panel */}
                <div className="button-group" >
                    <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                        {buttons}
                    </ButtonGroup>
                </div>

                {/* middle form section */}
                <div className="middle-content">
               
                    {steps[index]}
                    {index === 0 &&
                        <div>
                            <InputLabel htmlFor="photoselect">Select a photo for CV</InputLabel>
                            <input type="file" id="photoselect" accept="image/*" onChange={handlePhotoChange}></input>
                        </div>}
                    {/* Next and previous buttons */}
                    <Stack justifyContent={"space-between"} direction="row" sx={{ margin: 2 }} >
                        {index >= 1
                            && <Button startIcon={<ArrowLeftIcon />} variant="contained" onClick={() => setIndex(index - 1)}>Back Page</Button>}
                        {index <= steps.length - 1
                            && <Button endIcon={<ArrowRightIcon />} variant="contained" onClick={() => setIndex(index + 1)}>{index!==steps.length-1?"Next Page":"See and download CV"}</Button>}
                       
                    </Stack>
                </div>

                {/* left pdf view section */}
                <div className="left-pdf-view">
                    <PDFViewer style={{ width: '100%', height: '600px', border: '1px solid #ccc' }} >
                        <PdfGenerator photo={photo} data={dataconfig} />
                    </PDFViewer>
                </div>
            </div>
            :
            <div>
                 <PDFDownloadLink document={<PdfGenerator photo={photo} data={dataconfig} />}
                        fileName={`resume_${dataconfig.header.personname}`}>
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download now!'
                        }
                    </PDFDownloadLink>
                <PDFViewer style={{height:'100vh',width:'100vw'}}>
                            <PdfGenerator photo={photo} data={dataconfig} />     
                        </PDFViewer>
                       </div>}
        </div>

    )
} export default ParentForm;
