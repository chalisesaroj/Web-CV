import React, { useState } from "react";
import { Chip, TextField, Box } from "@mui/material";

function SkillsForm({ data, setData }) {
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newSkill.trim() !== "") {
      // Add the skill to the list and reset the input field
      const updatedSkills = [...data.skills, newSkill];
      setData({ ...data, skills: updatedSkills });
      setNewSkill("");  // Reset input field
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = data.skills.filter((_, i) => i !== index);
    setData({ ...data, skills: updatedSkills });
  };

  return (
    <div>
      <h3>Skills</h3>

      {/* Input field for adding a skill */}
      <TextField
        label="Add Skill"
        value={newSkill}
        onChange={handleSkillChange}
        onKeyPress={handleKeyPress}
        fullWidth
        margin="normal"
      />

      {/* Chips to display the added skills */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 2 }}>
        {data.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(index)}
            color="primary"
            sx={{ marginBottom: 1 }}
          />
        ))}
      </Box>
    </div>
  );
}

export default SkillsForm;
