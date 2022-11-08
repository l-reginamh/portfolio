import React from 'react';
import "./header.css";
import logo from "../../assets/images/logo-text.png";
import logoDark from "../../assets/images/logo-text-dark.png";

const Header = (props) => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav_logo'>
                    <img src={props.theme == 'light' ? logo : logoDark} alt="reg" />
                </a>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>About</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#experience" className='nav_link'>Experience</a>
                        </li>
                        {/* <li className='nav_item'>
                            <a href="#project" className='nav_link'>Project</a>
                        </li> */}
                        <li className='nav_item'>
                            <button type='button' className='theme_toggle' onClick={() => props.themeChange()}><i class='bx bx-sun sunlight'></i>/<i class='bx bx-moon moonlight'></i></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;