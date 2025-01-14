import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <PersonalInfo />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
