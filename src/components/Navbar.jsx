import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '/logo.png'

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
      // Get the saved theme from localStorage or default to light
      return localStorage.getItem("theme") || "light";
    });
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(!display)
    }

    const displayed = display ? 'visible' : 'hidden'
    const seeNav = display ? 'see-nav' : ''

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        // Save the theme to localStorage
        localStorage.setItem("theme", theme);
      }, [theme]);
    
    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    
    return (
        <nav>
            <NavLink to='/' className='logo'><img src={logo} alt="logo" className={'logo'}/></NavLink>
            <div className={`nav-lists ${displayed}`}>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><i className='fa-solid fa-circle-half-stroke' onClick={toggleTheme}></i></li>
            </div>
            <div className={`nav-ham ${seeNav}`} onClick={handleClick}>
                <div className='ham-lines first'></div>
                <div className='ham-lines'></div>
                <div className='ham-lines'></div>
            </div>
        </nav>
    );
}
 
export default Navbar;