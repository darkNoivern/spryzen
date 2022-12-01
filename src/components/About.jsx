import React from 'react'
import spinda from '../assets/img/spinda.gif'
const About = () => {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">About</h2>
                <span className="section__subtitle">My introduction</span>
                <div className="about__container container grid">
                    <img src={spinda} alt="spinda__dancing" className="about__img" />
                    <div className="about__data flexy">
                        <div>

                            <p className="about__decsription">
                                Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.
                                {/* I design and develop services websites. I love creating stylish, modern websites, web services and online stores. My passion is to design 
                            digital user experiences through the bold interface and meaningful interactions. I'm very passionate about web development and I love to 
                            create beautiful and functional websites. I'm a self-taught web developer and I'm always looking for new ways to improve my skills. I enjoy 
                            every step of the design process, from discussion and collaboraiton. */}
                            </p>
                            <div className="about__info">
                                {/* <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name">Years <br> experience</span>
                        </div>
                        <div>
                            <span class="about__info-title">20+</span>
                            <span class="about__info-name">Completed <br> Project</span>
                        </div>
                        <div>
                            <span class="about__info-title">05+</span>
                            <span class="about__info-name">Companies <br> worked</span>
                        </div>  */}
                            </div>
                            <div className="about__buttons">
                                <a download="" href="./assests/pdf/RESUME.pdf" className="button button--flex">
                                    Download CV<i className="uil uil-download-alt button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About