import { Stack, TextField, Box, Button, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';

function ExperienceForm({ data, setData }) {
  return (
    <div>
      <h3>Experience</h3>
      {data.experience.map((exp, expIndex) => (
        <Box key={expIndex} sx={{ marginBottom: 2, borderBottom: 1, paddingBottom: 2 }}>
          <div key={expIndex} style={{ marginBottom: "20px" }}>
            <Stack direction="column" spacing={2}>
              <TextField
                value={exp.role} label="Role"
                placeholder="Enter role"
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[expIndex].role = e.target.value;
                  setData({ ...data, experience: newExperience });
                }}
              />
              <TextField
                value={exp.company}
                placeholder="Enter company" label="Company Name"
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[expIndex].company = e.target.value;
                  setData({ ...data, experience: newExperience });
                }}
              />
              <TextField
                value={exp.duration} label="Duration of work"
                placeholder="Enter duration eg: Dec 2022-Sep 2025"
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[expIndex].duration = e.target.value;
                  setData({ ...data, experience: newExperience });
                }}
              />

              {/* Nested mapping for descriptions */}
              {exp.description.map((desc, descIndex) => (
                <div key={descIndex} style={{ marginLeft: "20px" }}>
                  <TextField  fullWidth className="descinputbox"
                    value={desc}
                    placeholder={`Description ${descIndex + 1}`}
                    onChange={(e) => {
                      const newExperience = [...data.experience];
                      newExperience[expIndex].description[descIndex] = e.target.value;
                      setData({ ...data, experience: newExperience });
                    }}
                  />
                </div>
              ))}

              {/* Button to add a new description */}
              <Button startIcon={<AddIcon />} onClick={() => {
                const newExperience = [...data.experience];
                newExperience[expIndex].description.push(""); // Add new empty description
                setData({ ...data, experience: newExperience });
              }}>
                Add Description
              </Button>
            </Stack>
            <IconButton onClick={(_, delindex) => {
              const updatedExperience = data.experience.filter((_, delindex) => expIndex !== delindex);
              setData({ ...data, experience: updatedExperience });
            }}><DeleteIcon color="error"/></IconButton>

          </div>
        </Box>

      ))}

      {/* Button to add a new experience */}
      <Button startIcon={<AddIcon />} onClick={() => {
        const newExperience = [
          ...data.experience,
          {
            role: '',
            company: '',
            duration: '',
            description: [''] // Initialize with an empty description array
          }
        ];
        setData({ ...data, experience: newExperience });
      }}>
        Add Experience
      </Button>
    </div>
  );
}

export default ExperienceForm;
