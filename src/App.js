import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WT1Report from './pages/WT1Report';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Extracurriculars from './pages/Extracurriculars';
import Resume from './pages/Resume';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/wt1-report" element={<WT1Report />} />
        <Route path="/" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;