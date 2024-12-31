import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '/logo.png'

const Navbar = () => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(!display)
    }

    const displayed = display ? 'visible' : 'hidden'
    const seeNav = display ? 'see-nav' : ''
    
    return (
        <nav>
            <NavLink to='/'><img src={logo} alt="logo" className={'logo'}/></NavLink>
            <div className={`nav-lists ${displayed}`}>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                {/* <i className='fa-solid fa-circle-half-stroke'></i> */}
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