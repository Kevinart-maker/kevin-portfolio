import { Routes, Route, NavLink } from 'react-router-dom'
import Project from './Project.jsx';
import { useState } from 'react';



const Projects = () => {    
    
    return ( 
        <div className="projects-container">
            <h1 className="page-heading">Projects.</h1>

            <div className="projects-nav">
                <li className='home-nav'>All</li>
                <li>
                    <a href="https://www.behance.net/kevinart2">Design</a>
                </li>
            </div>

            <Project />

            <div className='more'>
                <NavLink to='/contact'>
                    <span>Are you convinced to contact me now?</span> 
                    <i className='fa-solid fa-arrow-right fa-shake'></i>
                </NavLink>
            </div>
            <div className='socials'>
                    <a href="https://x.com/OdeyemiKevin?t=2OOUHwfoOUdgJfbj57d9hg&s=08">
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                    <a href="https://www.instagram.com/niveksti_?igsh=NTc4MTIwNjQ2YQ==">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://www.facebook.com/kevinart2020?mibextid=ZbWKwL">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="https://github.com/Kevinart-maker">
                        <i className='fa-brands fa-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-odeyemi-06686524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
            </div>
        </div>
    );
}
 
export default Projects;