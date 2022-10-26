import React from 'react';
import "./header.css";
import logo from "../../assets/images/logo-text.png";

const Header = () => {

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav_logo'>
                    <img src={logo} alt="reg" />
                </a>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>About</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#experience" className='nav_link'>Experience</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#project" className='nav_link'>Project</a>
                        </li>
                        <li className='nav_item'>
                            <button type='button' className='theme_toggle'><i class='bx bx-sun'></i></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;