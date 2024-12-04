import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HeaderForm({ data, setData }) {
  const handleChange = (e, field) => {
    const newHeader = { ...data.header };
    newHeader[field] = e.target.value;
    setData({ ...data, header: newHeader });
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>Your Basic Details</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          value={data.header.personname}
          placeholder="Enter your name"
          onChange={(e) => handleChange(e, "personname")}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Title"
          multiline
          rows={3}
          value={data.header.title}
          placeholder="Your Title e.g., Software Engineer"
          onChange={(e) => handleChange(e, "title")}
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default HeaderForm;
