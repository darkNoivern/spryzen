import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    // const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'

    const themeChange = () => {
        document.body.classList.toggle(darkTheme)
    }

    /*==================== MENU SHOW Y HIDDEN ====================*/
    // const navMenu = document.getElementById('nav-menu'),
    //     navToggle = document.getElementById('nav-toggle'),
    //     navClose = document.getElementById('nav-close')

    // /*===== MENU SHOW =====*/
    // /* Validate if constant exists */
    // if (navToggle) {
    //     navToggle.addEventListener('click', () => {
    //         navMenu.classList.add('show-menu')
    //     })
    // }

    // /*===== MENU HIDDEN =====*/
    // /* Validate if constant exists */
    // if (navClose) {
    //     navClose.addEventListener('click', () => {
    //         navMenu.classList.remove('show-menu')
    //     })
    // }

    /*==================== REMOVE MENU MOBILE ====================*/
    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        console.log(navMenu, 'clicked')
        navMenu.classList.remove('show-menu')
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to='home' className="nav__logo">spryzen23</Link>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-estate nav__icon"></i>Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-user nav__icon"></i>About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link"><i class="uil uil-file-alt nav__icon"></i>Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-briefcase-alt nav__icon"></i>Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-scenery nav__icon"></i>Portfolio
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-message nav__icon"></i>Contact Me
                            </Link>
                        </li>
                    </ul>

                    <i
                    onClick={()=>{
                        document.getElementById('nav-menu').classList.remove('show-menu') 
                    }}
                    className="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div className="nav__btns">
                    <i
                        onClick={() => { themeChange(); }}
                        className="uil uil-moon change-theme" id="theme-button"></i>
                    <div
                    onClick={()=>{
                        document.getElementById('nav-menu').classList.add('show-menu')
                    }}
                    className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar