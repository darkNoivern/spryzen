import React, { useState } from 'react'

const Skills = () => {

    const [skillone, setSkillone] = useState(true);
    const [skilltwo, setSkilltwo] = useState(true);
    const [skillthree, setSkillthree] = useState(true);

    return (
        <>
            <section class="skills section" id="skills">
                <h2 class="section__title">Skills</h2>
                <span class="section__subtitle">My technical level</span>
                <div class="skills__container container grid">

                    <div class={`skills__content  ${skillone ? "skills__open" : "skills__close"}`}>
                        <div class="skills__header">
                            <i class="uil uil-arrow skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Languages</h1>
                                <span class="skills__subtitle">More than 2 years of practice</span>
                            </div>
                            <i
                            onClick={()=>{setSkillone(!skillone)}} 
                            class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid">

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">C++</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__cplusplus"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">CSS</h3>
                                    <span class="skills__number">75%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Javascript</h3>
                                    <span class="skills__number">85%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__javascript"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class={`skills__content ${skilltwo ? "skills__open" : "skills__close"}`}>
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Frameworks</h1>
                                <span class="skills__subtitle">More than 1 year of practice</span>
                            </div>
                            <i
                            onClick={()=>{setSkilltwo(!skilltwo)}} 
                            class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid">

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">ReactJS</h3>
                                    <span class="skills__number">85%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__react"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Bootstrap 5</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__bootstrap"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Tailwind CSS</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__tailwind"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class={`skills__content ${skillthree ? "skills__open" : "skills__close"}`}>
                        <div class="skills__header">
                            <i class="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Backend Developer</h1>
                                <span class="skills__subtitle">More than 6 months of practice</span>
                            </div>
                            <i
                            onClick={()=>{setSkillthree(!skillthree)}} 
                            class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid">

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Firebase</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__firebase"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Skills