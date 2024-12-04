import { Delete } from "@mui/icons-material";
import { Stack, TextField,Box,Button, IconButton} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// certification: [{
//   certificateTitle: "",
//   certificateLink: ""
// }],

function CertificationForm({ data, setData }) {
  // Function to handle input changes for each certification field
  const handleInputChange = (e, index, field) => {
    const updatedCertifications = [...data.certification];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: e.target.value,
    };
    setData(updatedCertifications);
  };

  // Function to add a new certification entry
  const addCertification = () => {
    setData([...data.certification, { certificateTitle: "", certificateLink: "" }]);
  };

  // Function to remove a certification entry
  const removeCertification = (index) => {
    const updatedCertifications = data.certification.filter((_, i) => i !== index);
    setData(updatedCertifications);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>
  <div>
      <h3>Certifications</h3>
     

      {data.certification.map((cert, index) => (
        <div key={index}>
            <Box key={index} sx={{ marginBottom: 2, borderBottom: 1, paddingBottom: 2 }}>
            <Stack direction="column" spacing={5}>
          <TextField 
            type="text"
            label="Title"
            placeholder="Title of the certificate"
            value={cert.certificateTitle}
            onChange={(e) => handleInputChange(e, index, "certificateTitle")}
          />
          <TextField
            type="text"
            label="Link"
            placeholder="Link to the certificate"
            value={cert.certificateLink}
            onChange={(e) => handleInputChange(e, index, "certificateLink")}
          />
           <IconButton color="error" onClick={() => removeCertification(index)}><DeleteIcon/></IconButton>
          </Stack>
         
            </Box>
        
        </div>
      ))}
      <Button startIcon={<AddCircleOutlineIcon />} onClick={addCertification}>Add Certification</Button>
    </div>
    </Box>
  
  );
}

export default CertificationForm;
