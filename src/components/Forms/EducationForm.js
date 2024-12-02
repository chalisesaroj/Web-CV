import React from "react";
function EducationForm({ data, setData }) {
  // education :[
  // {
  //   degree: '',
  //   specialization:'',
  //   university: '',
  //   institute: ''
  //   startDate
  //      endDate
  // }
  //      ],
  return (
    <div>
      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <div key={index}>
          <label for="Degree">Choose a Degree:</label>

          <select
            name="degree"
            id={`degree-${index}`}
            value={edu.degree} // Bind the current value
            onChange={(e) => {
              const newEducation = [...data.education];
              newEducation[index].degree = e.target.value; // Update degree based on selection
              setData({ ...data, education: newEducation });
            }}
          >
            <option value="">Select Degree</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="Doctoral">Doctoral</option>
          </select>
          <input type="text" value={edu.specialization} placeholder="Specialization" onChange={(e) => {
            const newEducation = [...data.education];
            newEducation[index].specialization = e.target.value;
            setData({ ...data, education: newEducation })
          }}></input>
          <input type="text" value={edu.university} placeholder="Board/ University" onChange={(e) => {
            const newEducation = [...data.education];
            newEducation[index].university = e.target.value;
            setData({ ...data, education: newEducation })
          }}></input>
          <input type="text" value={edu.institute} placeholder="Institute" onChange={(e) => {
            const newEducation = [...data.education];
            newEducation[index].institute = e.target.value;
            setData({ ...data, education: newEducation })
          }}></input>

          <input type="date" value={edu.startDate} placeholder="startDate" onChange={(e) => {
            const newEducation = [...data.education];
            newEducation[index].startDate = e.target.value;
            setData({ ...data, education: newEducation })
          }}></input>


          <input type="date" value={edu.endDate} placeholder="ENDDate" onChange={(e) => {
            const newEducation = [...data.education];
            newEducation[index].endDate = e.target.value;
            setData({ ...data, education: newEducation })
          }}></input>
        </div>
      ))}
      <button onClick={() => {
        const addedEducation = [...data.education, {
          degree: '',
          specialization: '',
          university: '',
          institute: '',
          startDate: "",
          endDate: ""
        }]
        setData({...data,education:addedEducation})
      }}>Add Experience</button>

    </div>
  )
} export default EducationForm;