import { Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
function ProfessionalTrainingForm({ e, data, setData }) {
    const handleChange = (e, index, field) => {
        const newProfessionalTraining = [...data.professionaltraining];
        newProfessionalTraining[index][field] = e.target.value;
        setData({ ...data, professionaltraining: newProfessionalTraining })
    }
    return (
        <div>
            <h3>Professional Trainings</h3>
            {data.professionaltraining.map((training, index) => (
                <div key={index}>
                    <Stack direction="column" spacing={3}>
                        <TextField type="text" label="Training title" value={training.title}
                            placeholder="Title of training" onChange={(e) => handleChange(e, index, "title")} />

                        <TextField type="text" label="Training Instructor" value={training.instructor}
                            placeholder="Instructor of training" onChange={(e) => handleChange(e, index, "instructor")} />

                        <TextField type="text" label="Training Platform" value={training.platform}
                            placeholder="Plaatform eg. Udemy.." onChange={(e) => handleChange(e, index, "platform")} />

                        <TextField type="text" label="Training Duration" value={training.duration}
                            placeholder="Duration eg. 50 hrs" onChange={(e) => handleChange(e, index, "duration")} />

                        <TextField type="Training Link" label="Training Link" value={training.link}
                            placeholder="Link of training of  online training course if  applicable" onChange={(e) => handleChange(e, index, "link")} />

                    </Stack>
                    <IconButton onClick={() => {
                        const updatedTrainingdel = data.professionaltraining.filter((_, delIndex) => index !== delIndex);
                        setData({ ...data,professionaltraining: updatedTrainingdel});
                    }}><DeleteIcon /></IconButton>
                </div>

            ))}
            <Button style={{ margin: "5%" }} startIcon={<AddIcon />} onClick={(() => {
                const updatedTraining = [...data.professionaltraining, {
                    title: "",
                    instructor: "",
                    platform: "",
                    duration: "",
                    link: ""

                }];
                setData({ ...data, professionaltraining: updatedTraining });

            })}>Add Professional Training</Button>
        </div>
    )
} export default ProfessionalTrainingForm;