import React from 'react';

function Certification({dataCertification}) {
  return (
    <section className="skills">
      <h2>Certification</h2>
      <ul>
        <li><a href="chalisesaroj.github.io/REACT-NEWS-WEBSITE">{dataCertification.certificateTitle}</a></li>
        
        <li a href="https://github.com/chalisesaroj/bloggingApplication">NEC certified mechanical engineer </li>
        <li>Mechanical Systems Design</li>
      </ul>
    </section>
  );
}

export default Certification;
