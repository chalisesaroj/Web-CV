import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: '4G Engineering and Developer Private Limited',
      duration: 'Sep 2022 - Present',
      description: ['Designed and implemented RESTful APIs for CRUD operations using Java and Spring Boot',
        ' Secured endpoints with Spring Security and developed login/logout and forgot-password ',
        '  Built a system to generate PDF reports and send automated emails to vehicle owners',
        'Collaborated with the UI team for seamless integration of APIs.']
    },
    {
      role: 'React Developer',
      company: 'Voyager IT Private Limited',
      duration: '2022 - Now',
      description: ['Developed responsive and dynamic UI components using React',
        ' Integrated front-end applications with RESTful APIs.. ',
       ]

    }
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.role} - {exp.company}</h3>
            <p>{exp.duration}</p>
            <p>{exp.description.map((desc,ind)=>(
              <li key={ind}>{desc}</li>
            ))}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
