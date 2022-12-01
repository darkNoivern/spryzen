import React from 'react'
import project from '../assets/img/project.png'
import { Link } from 'react-scroll'

const Project = () => {
    return (
        <>
            <section class="project section">
                <div class="project__bg">
                    <div class="project__container container grid">
                        <div class="project__data">
                            <h2 class="project__title">
                                You have a new idea or project
                            </h2>
                            <p class="project__description">
                                Ping me up and we can start building the dream.
                            </p>
                            <Link to="contact" class="button button--flex button--white">
                                Contact Me
                                <i class="uil uil-message project__icon button__icon"></i>
                            </Link>
                        </div>
                        <img src={project} alt="" class="project__img" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Project