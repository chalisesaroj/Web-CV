import React from 'react';


function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: '4G Engineering and Developer Private Limited',
      duration: 'Sep 2022 - Present',
      description: ['Designed and implemented RESTful APIs for Vehicle Record Management using Spring,Hibernate and MYSQL',
        ' Secured endpoints with Spring Security and developed login/logout and forgot-password ',
        '  Built a system to generate PDF reports and send automated emails to vehicle owners',
        'Developed the interactive front end with UI/UX integrating with the Rest API']
    },
    {
      role: 'React Developer',
      company: 'Voyager IT Private Limited',
      duration: 'Oct 2023 - Aug 2024- Part Time',
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
        <h5>{exp.role} - {exp.company}</h5>
        <p>{exp.duration}</p>
        <ul> {/* Nested unordered list for descriptions */}
          {exp.description.map((desc, ind) => (
            <div>
                
                <li key={ind} className='custom-bullet'>{desc}</li>
            </div>
            
          ))}
        </ul>
      </li>
    ))}
  </ul>
</section>

  );
}

export default Experience;
