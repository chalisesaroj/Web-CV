import React, { useState } from "react";
import { Chip, TextField, Box } from "@mui/material";

function FamiliarWithForm({ data, setData }) {

  const [newFamiliarWith, setNewFamiliarWith] = useState("");

  const handleFamiliarWithChange = (event) => {
    setNewFamiliarWith(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newFamiliarWith.trim() !== "") {
      // Add the FamiliarWith to the list and reset the input field
      const updatedFamiliarWiths = [...data.familiarwith, newFamiliarWith];
      setData({ ...data, familiarwith: updatedFamiliarWiths });
      setNewFamiliarWith("");  // Reset input field
    }
  };

  const handleDeleteFamiliarWith = (index) => {
    const updatedFamiliarWiths = data.familiarwith.filter((_, i) => i !== index);
    setData({ ...data, familiarWith: updatedFamiliarWiths });
  };

  return (
    <div>
      <h3>Familiar With</h3>
   <i>Mention any technology, concept, culture or skills you are familiar with.Skip if not applicable</i>
      {/* Input field for adding a FamiliarWith */}
      <TextField
        label="Add FamiliarWith"
        value={newFamiliarWith}
        onChange={handleFamiliarWithChange}
        onKeyPress={handleKeyPress}
        fullWidth
        margin="normal"
      />

      {/* Chips to display the added FamiliarWiths */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 2 }}>
        {data.familiarwith.filter((FamiliarWith,index)=>FamiliarWith!=="")
        .map((FamiliarWith, index) => (
          <Chip
            key={index}
            label={FamiliarWith||""}
            onDelete={() => handleDeleteFamiliarWith(index)}
            color="primary"
            sx={{ marginBottom: 1 }}
          />
        ))}
      </Box>
      
    </div>
  );
}

export default FamiliarWithForm;
