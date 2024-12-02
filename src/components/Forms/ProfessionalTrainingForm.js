import React from "react";
function ProfessionalTrainingForm({e,data,setData}){
    const handleChange=(e,index,field)=>{
   const newProfessionalTraining=[...data.professionaltraining];
   newProfessionalTraining[index][field]=e.target.value;
   setData({...data,professionaltraining:newProfessionalTraining})
    }
return(
    <div>
        <h3>Professional Trainings</h3>
          {/* {
                title: "",
                instructor: "",
                platform: "",
                duration: "",
                link: ""
            } */}
            {data.professionaltraining.map((training,index)=>(
                <div key={index}>
                    <input type="text" value={training.title}
                    placeholder="Title of training" onChange={(e)=>handleChange(e,index,"title")}>
                    </input>
                    <input type="text" value={training.instructor}
                    placeholder="Instructor of training" onChange={(e)=>handleChange(e,index,"instructor")}>
                    </input>
                    <input type="text" value={training.platform}
                    placeholder="Plaatform eg. Udemy.." onChange={(e)=>handleChange(e,index,"platform")}>
                    </input>
                    <input type="text" value={training.duration}
                    placeholder="Duration eg. 50 hrs" onChange={(e)=>handleChange(e,index,"duration")}>
                    </input>
                    <input type="text" value={training.link}
                    placeholder="Link if applicable" onChange={(e)=>handleChange(e,index,"link")}>
                    </input>
                </div>
            ))}
    </div>
)
}export default ProfessionalTrainingForm;