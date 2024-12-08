import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PdfGenerator from './components/pdf';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CvConfig from './config/cvconfig';
import ParentForm from './components/Forms/parentForm';

import { PDFDownloadLink } from '@react-pdf/renderer';


function App() {
  return (
    <div >

    
    <ParentForm />
    </div>
  );
}

export default App;
