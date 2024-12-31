import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/glitch.css'
import './styles/home.css'
import './styles/about.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/preview.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import CircleFollowMouse from './components/CircleFollowMouse'

function App() {
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = "//js.hs-scripts.com/48728885.js";

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);  

  return (
    <>
      <div className="container">
        <CircleFollowMouse />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
