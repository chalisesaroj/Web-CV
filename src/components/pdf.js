import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Header from './Header';
import Certification from './certification';
import Projects from './Project';
import Familiarwith from './familiarwith';
import ProfessionalTraining from './ProfessionalTraining';
import './cvstyling.css';

const PdfGenerator = () => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content overflows
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <div>
      <button onClick={handleDownload} style={{ marginBottom: '20px' }}>
        Download PDF
      </button>
      
      {/* Ensure all content is inside this div */}
      <div ref={pdfRef} style={{ padding: '20px', backgroundColor: '#fff' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ flex: 4, padding: '10px' }}>
          <img src={`${process.env.PUBLIC_URL}/saroj.jpg`} className="roundphoto" alt="Profile" />

          </div>
          <div style={{ flex: 7, padding: '10px' }}>
            <Header />
            <About />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 2, paddingLeft: '10px' }}>
            <Skills />
            {/* <Certification /> */}
            <Projects />
            <Familiarwith />
          </div>
          <div style={{ flex: 1, paddingRight: '10px' }}></div>
          <div style={{ flex: 7, paddingRight: '10px' }}>
            <Experience />
            <Education />
            <ProfessionalTraining />
            <Contact />

          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;
