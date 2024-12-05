import React from 'react';
import './cvstyling.css';



const ProfessionalTraining = ({dataProfessionalTraining}) => {
  function isValidProfessionalTraining(trainingArray) {
    return trainingArray.some(training => {
      // Check if any value in the object is a non-empty string
      return Object.values(training).some(value => 
        typeof value === 'string' && value.trim() !== ''
      );
    });
  }
  if(!isValidProfessionalTraining(dataProfessionalTraining)){
    return null;
  }
  
//   professionaltraining: [
//     {
//         title: "",
//         instructor: "",
//         platform: "",
//         duration: "",
//         link: ""
//     }
// ],

  return (
    <section>
      <h2>Professional Training</h2>
      <ul>
        {dataProfessionalTraining.map((training, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
          <a href={training.link} style={{textDecoration:"none",color:"inherit"}}>  {training.title} from the instructor
        <strong>{training.instructor}</strong>
          via <strong>{training.platform}</strong>
            --{training.duration}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfessionalTraining;
