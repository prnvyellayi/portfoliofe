import styles from './css/App.module.css';
import React, { useState } from 'react';
import Home from './routes/home';
import Experience from './routes/experience';
import Skills from './routes/skills';
import About from './routes/about';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
