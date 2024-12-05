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
import './formStyling.css';
import { Button, Stack } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PdfGenerator from "../pdf";

import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
function ParentForm() {
    const [index, setIndex] = useState(0);

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
        <div >

            {CvDisplay ?
                <div>
                    <PDFViewer>
                        <PdfGenerator data={dataconfig} />
                    </PDFViewer>
                    <PDFDownloadLink document={<PdfGenerator data={dataconfig} />}
                        fileName="resume.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download now!'
                        }
                    </PDFDownloadLink>
                </div>
                :
                <div style={{display:"flex"}}>
                    <Stack direction="column" spacing={3} style={{flex:7}}>
                        {steps[index]}
                        {/* Next and previous buttons */}
                        <Stack justifyContent={"space-between"} direction="row">
                            {index >= 1
                                && <Button startIcon={<ArrowLeftIcon />} variant="contained" onClick={() => setIndex(index - 1)}>Back Page</Button>}
                            {index < steps.length - 1
                                && <Button endIcon={<ArrowRightIcon />} variant="contained" onClick={() => setIndex(index + 1)}>Next  Page</Button>}
                            {index === steps.length - 1 && <Button variant="contained" color="success" onClick={() => setCvDisplay(true)}>Submit and see my CV</Button>}
                        </Stack>
                    </Stack>
                    <div style={{flex:1}}></div>
                    <div style={{flex:3,width:'210hw'}}>
                    <PDFViewer width="100%" height="100%">
                        <PdfGenerator data={dataconfig} />
                    </PDFViewer>
                        </div>
                </div>
            }
        </div>

    )
} export default ParentForm;
