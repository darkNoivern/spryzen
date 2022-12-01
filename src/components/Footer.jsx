import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer__title">spryzen23
                            </h1>
                            <span className="footer__subtitle">
                                Frontend Developer
                            </span>
                        </div>

                        <ul className="footer__links">
                            <li>
                                <Link to="services" className="footer__link">Services</Link>
                            </li>
                            <li>
                                <Link to="portfolio" className="footer__link">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="contact" className="footer__link">Contactme</Link>
                            </li>
                        </ul>

                        <div className="footer__socials">
                            <a href="https://www.facebook.com/mahadev.karmakar.372/" className="footer__social" target="_blank">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/ryuzaki_mahadev/" className="footer__social" target="_blank">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="" className="footer__social" target="_blank">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p className="footer__copy">
                        &#169; 2023 spryzen all rights reserved
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer