import { Label } from "@mui/icons-material";
import { InputLabel, Stack, TextField, Select, MenuItem, Box, IconButton, Button, FormControl } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
function EducationForm({ data, setData }) {
  return (
    <div>
      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <Box sx={{ marginBottom: 2, borderBottom: 2, paddingBottom: 2 }}>
          <div key={index}>
            <Stack spacing={3} direction="column">
                <FormControl fullWidth style={{ minWidth: 200 }}>
                 
                  <div style={{ display: "flex" }}>
                 
                    <Select
                    id="Degree"
                      value={edu.degree }
                      onChange={(e) => {
                        const newEducation = [...data.education];
                        newEducation[index].degree = e.target.value;
                        setData({ ...data, education: newEducation });
                      }}
                      label="Degree"
                      displayEmpty
                      renderValue={(selected) => {
                        if (!selected) {
                          return <em>Select a Degree</em>;
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Select degree">
                        <em>Select Degree</em>
                      </MenuItem>
                      <MenuItem value="Intermediate">Intermediate</MenuItem>
                      <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                      <MenuItem value="Master's">Master's</MenuItem>
                      <MenuItem value="Doctoral">Doctoral</MenuItem>
                    </Select>
                    <TextField fullWidth type="text" value={edu.specialization} placeholder="Specialization" onChange={(e) => {
                      const newEducation = [...data.education];
                      newEducation[index].specialization = e.target.value;
                      setData({ ...data, education: newEducation })
                    }} />
                  </div>
                </FormControl>

         
              <Stack spacing={3} direction="column">
                <TextField type="text" value={edu.university} placeholder="Board/ University" onChange={(e) => {
                  const newEducation = [...data.education];
                  newEducation[index].university = e.target.value;
                  setData({ ...data, education: newEducation })
                }} />
                <TextField type="text" value={edu.institute} placeholder="Institute" onChange={(e) => {
                  const newEducation = [...data.education];
                  newEducation[index].institute = e.target.value;
                  setData({ ...data, education: newEducation })
                }} />

                <Stack direction="row" justifyContent={"space-between"}>
                  <div>
                    <InputLabel htmlFor="Start-date">Start-date</InputLabel>
                    <TextField type="date" value={edu.startDate} placeholder="startDate" onChange={(e) => {
                      const newEducation = [...data.education];
                      newEducation[index].startDate = e.target.value;
                      setData({ ...data, education: newEducation })
                    }} />
                  </div>

                  <div>
                    <InputLabel htmlFor="end date">End-date</InputLabel><TextField type="date" value={edu.endDate} placeholder="ENDDate" onChange={(e) => {
                      const newEducation = [...data.education];
                      newEducation[index].endDate = e.target.value;
                      setData({ ...data, education: newEducation })
                    }} />
                  </div>

                </Stack>
              </Stack></Stack>

            <IconButton onClick={(e) => {
              const updatedEducation = data.education.filter((education, delindex) => delindex !== index);
              setData({ ...data, education: updatedEducation })
            }}><DeleteIcon color="error" /></IconButton>
          </div>
        </Box>
      ))}
      <Button startIcon={<AddIcon />} onClick={() => {
        const addedEducation = [...data.education, {
          degree: '',
          specialization: '',
          university: '',
          institute: '',
          startDate: "",
          endDate: ""
        }]
        setData({ ...data, education: addedEducation })
      }}>Add Education</Button>

    </div>
  )
} export default EducationForm;