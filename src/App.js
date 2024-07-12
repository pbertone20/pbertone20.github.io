import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Extracurriculars from './pages/Extracurriculars';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;