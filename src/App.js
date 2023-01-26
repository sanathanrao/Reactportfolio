import React from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';


const App = () => (
    <div>
        <Navbar />
        <Home />
        <Skills/>
        <Work/>
        <Blog/>
        <Contact/>
    </div>
  );


export default App;