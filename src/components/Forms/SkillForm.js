import React from "react";

function SkillsForm({ data, setData }) {


    return (
        <div>
            {data.skills.map((skill, index) => (
                <input
                    key={index}
                    type="text"
                    value={skill}
                    onChange={(e) => {
                        const newSkill = [...data.skills];
                        newSkill[index] = e.target.value;
                        setData({ ...data, skills: newSkill })

                    }}
                />
            ))}
            {data.skills.map((skill, index) => (
                <div key={index}>

                    <button onClick={() => {
                        const updatedSkills = data.skills.filter((_, i) => i !== index);  // Removes skill at given index
                        setData({ ...data, skills: updatedSkills });
                    }}>
                        Remove skill
                    </button>
                </div>
            ))}

            <button
                onClick={() => {
                    const updatedarray = [...data.skills, ""];
                    setData({ ...data, skills: updatedarray });

                }}
            >
                Add Skill
            </button>
        </div>
    );
}

export default SkillsForm;
