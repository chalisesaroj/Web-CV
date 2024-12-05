import React from "react";
import { TextField, Button, Box, Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function ProjectForm({ data, setData }) {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">Projects</Typography>
      
      {data.projects.map((project, index) => (
        <Box key={index} sx={{ marginBottom: 2, borderBottom: 1, paddingBottom: 2 ,width:"100hw"}}>
          <TextField
            fullWidth
            margin="normal"
            label="Project Name"
            variant="outlined"
            value={project.projectname}
            onChange={(e) => {
              const newProjects = [...data.projects];
              newProjects[index].projectname = e.target.value;
              setData({ ...data, projects: newProjects });
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Project Description"
            variant="outlined"
            value={project.projectDescription}
            onChange={(e) => {
              const newProjects = [...data.projects];
              newProjects[index].projectDescription = e.target.value;
              setData({ ...data, projects: newProjects });
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Project Link"
            variant="outlined"
            value={project.projectLink}
            onChange={(e) => {
              const newProjects = [...data.projects];
              newProjects[index].projectLink = e.target.value;
              setData({ ...data, projects: newProjects });
            }}
          />
          <IconButton 
            color="error"
            onClick={() => {
              const newProjects = data.projects.filter((_, i) => i !== index);
              setData({ ...data, projects: newProjects });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      
      <Button 
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => {
          const newProjectArray = [...data.projects, { projectname: "", projectDescription: "", projectLink: "" }];
          setData({ ...data, projects: newProjectArray });
        }}
      >
        Add Project
      </Button>
    </Box>
  );
}

export default ProjectForm;
