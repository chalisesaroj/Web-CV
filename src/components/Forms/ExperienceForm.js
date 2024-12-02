import React from "react";

function ExperienceForm({ data, setData }) {
  return (
    <div>
      {data.experience.map((exp, expIndex) => (
        <div key={expIndex} style={{ marginBottom: "20px" }}>
          <input
            value={exp.role}
            placeholder="Enter role"
            onChange={(e) => {
              const newExperience = [...data.experience];
              newExperience[expIndex].role = e.target.value;
              setData({ ...data, experience: newExperience });
            }}
          />
          <input
            value={exp.company}
            placeholder="Enter company"
            onChange={(e) => {
              const newExperience = [...data.experience];
              newExperience[expIndex].company = e.target.value;
              setData({ ...data, experience: newExperience });
            }}
          />
          <input
            value={exp.duration}
            placeholder="Enter duration"
            onChange={(e) => {
              const newExperience = [...data.experience];
              newExperience[expIndex].duration = e.target.value;
              setData({ ...data, experience: newExperience });
            }}
          />

          {/* Nested mapping for descriptions */}
          {exp.description.map((desc, descIndex) => (
            <div key={descIndex} style={{ marginLeft: "20px" }}>
              <input
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
          <button onClick={() => {
            const newExperience = [...data.experience];
            newExperience[expIndex].description.push(""); // Add new empty description
            setData({ ...data, experience: newExperience });
          }}>
            Add Description
          </button>
        </div>
      ))}

      {/* Button to add a new experience */}
      <button onClick={() => {
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
      </button>
    </div>
  );
}

export default ExperienceForm;
