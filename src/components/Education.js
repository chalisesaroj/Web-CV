import React from 'react';

function Education() {
  const education = [
    {
      degree: 'M.S. in Mechanical System Design and Engineering',
      institution: 'IOE Pulchowk Campus,TU',
      duration: '2017-2019'
    },
    {
      degree: 'B.E. in Mechanical Engineering',
      institution: 'IOE Pulchowk Campus,TU',
      duration: 'Jan 2011-Dec 2014'
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h5>{edu.degree}</h5>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
