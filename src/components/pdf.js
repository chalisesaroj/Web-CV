import React from 'react';
import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import Header from './Header';  // Should use React PDF components
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Project';
import Contact from './Contact';
import Familiarwith from './familiarwith';
import ProfessionalTraining from './ProfessionalTraining';
import CertificationForm from './Forms/CertificationForm';
import Certification from './certification';

// Define styles for React PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: 10,
  },
});

const PdfGenerator = ({ photo,data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {/* Profile Image */}
       {photo&& <Image src={photo} style={styles.profileImage} />}
        {/* Header and About */}
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Header dataHeader={data.header} />
          <About dataAbout={data.aboutus} />
        </View>
      </View>

      {/* Main Content Sections */}
      <View style={{ flexDirection: 'row' }}>
        {/* Left Column */}
        <View style={{ flex: 2, marginRight: 10 }}>
          <Skills dataSkill={data.skills} />
          <Projects dataProject={data.projects} />
          {/* <Certification dataCertification={data.certification}/> */}
          <Familiarwith dataFamiliarWith={data.familiarwith} />
        </View>
<View style={{flex:1}}></View>
        {/* Right Column */}
        <View style={{ flex: 7 }}>
          <Experience dataExperience={data.experience} />
          <Education dataEducation={data.education} />
          <ProfessionalTraining dataProfessionalTraining={data.professionaltraining} />
          <Contact dataContact={data.contact} />
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfGenerator;
