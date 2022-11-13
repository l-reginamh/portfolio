import React from 'react';
import "./header.css";
import logo from "../../assets/images/logo-text.png";
import logoDark from "../../assets/images/logo-text-dark.png";
import { useState, useEffect } from 'react';

const Header = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setClick(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <header className='header'>
            <nav className='nav'>
                <a href='/' className='nav-logo'>
                    <img src={props.theme == 'light' ? logo : logoDark} alt="reg" />
                </a>
                <div className='nav-menu'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href="#about" className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#experience" className='nav-link'>Experience</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#project" className='nav-link'>Project</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#getintouch" className='nav-link'>Get In Touch</a>
                        </li>
                        <li className='nav-item'>
                            <button type='button' className='theme-toggle' onClick={() => props.themeChange()}><i class='bx bx-sun sunlight'></i>/<i class='bx bx-moon moonlight'></i></button>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className='nav-mobile'>
                <a href='index.html' className='nav-logo'>
                    <img src={props.theme == 'light' ? logo : logoDark} alt="reg" />
                </a>
                <button className="nav-btn">
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleClick}></i>
                </button>
            </nav>
            <div className={click ? 'nav-mobile-menu show' : 'nav-mobile-menu hide'}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#experience" className='nav-link'>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#project" className='nav-link'>Project</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#getintouch" className='nav-link'>Get In Touch</a>
                    </li>
                    <li className='nav-item'>
                        <button type='button' className='theme-toggle' onClick={() => props.themeChange()}><i class='bx bx-sun sunlight'></i>/<i class='bx bx-moon moonlight'></i></button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;