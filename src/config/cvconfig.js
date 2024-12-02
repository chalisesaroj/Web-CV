import React, { useState } from "react";

function CvConfig() {
  const [formData, setFormData] = useState({
    experience: [
      {
        role: "",
        company: "",
        duration: "",
        descriptions: [""], // Array for multiple job descriptions
      },
    ],
  });

  // Handle input changes dynamically
  const handleChange = (e, fieldPath) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData };
      fieldPath.reduce((acc, key, index) => {
        if (index === fieldPath.length - 1) {
          acc[key] = value;
        } else {
          acc[key] = { ...acc[key] };
        }
        return acc[key];
      }, newData);
      return newData;
    });
  };

  // Add a new experience block
  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          role: "",
          company: "",
          duration: "",
          descriptions: [""],
        },
      ],
    }));
  };

  // Add a new job description within an experience
  const addDescription = (expIndex) => {
    setFormData((prevData) => {
      const updatedExperiences = [...prevData.experience];
      updatedExperiences[expIndex].descriptions.push("");
      return { ...prevData, experience: updatedExperiences };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Experience</h3>
        {formData.experience.map((exp, expIndex) => (
          <div key={expIndex} className="mb-4">
            <input
              type="text"
              className="form-control mb-2"
              value={exp.company}
              onChange={(e) => handleChange(e, ["experience", expIndex, "company"])}
              placeholder="Company"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={exp.role}
              onChange={(e) => handleChange(e, ["experience", expIndex, "role"])}
              placeholder="Role"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={exp.duration}
              onChange={(e) => handleChange(e, ["experience", expIndex, "duration"])}
              placeholder="Duration"
            />

            {/* Job Descriptions */}
            {exp.descriptions.map((desc, descIndex) => (
              <div key={descIndex}>
                <textarea
                  className="form-control mb-2"
                  value={desc}
                  onChange={(e) =>
                    handleChange(e, ["experience", expIndex, "descriptions", descIndex])
                  }
                  placeholder={`Description ${descIndex + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={() => addDescription(expIndex)}
            >
              Add Description
            </button>
            <hr />
          </div>
        ))}

        <button
          type="button"
          className="btn btn-success mb-4"
          onClick={addExperience}
        >
          Add Experience
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CvConfig;
