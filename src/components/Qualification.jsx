import React, { useState } from 'react'

const Qualification = () => {

    const [active, setActive] = useState(true);

    return (
        <section class="qualification section">

            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My Personal Journey</span>
            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div
                    onClick={()=>{setActive(true)}} 
                    class={`qualification__button ${active && "qualification__active"} button--flex`} data-target="#education">
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                    onClick={()=>{setActive(false)}}
                    class={`qualification__button ${!active && "qualification__active"} button--flex`} data-target="#work">
                        <i class="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                        {/* <i class="uil uil-trophy qualification__icon"></i>Achievements */}
                    </div>
                </div>

                <div class="qualification__section">

                    <div class={`qualification__content ${active && "qualification__active"}`} data-content id="education">
                        <div class="qualification__data">
                            <div class="text__right">
                                <h3 class="qualification__title">
                                    Computer Science & Engineering
                                </h3>
                                <span class="qualification__subtitle">
                                    NIT Durgapur
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2019-2023
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>

                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                            <div>
                                <h3 class="qualification__title">
                                    Senior Secondary
                                </h3>
                                <span class="qualification__subtitle">
                                    Hem Sheela Model School
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2017-2019
                                </div>
                            </div>
                        </div>

                        <div class="qualification__data">
                            <div class="text__right">
                                <h3 class="qualification__title">
                                    Secondary
                                </h3>
                                <span class="qualification__subtitle">
                                    Hem Sheela Model School
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2015-2017
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>

                    <div class={`qualification__content ${!active && "qualification__active"}`} data-content id="work">

                        <div class="qualification__data">
                            <div class="text__right">
                                <h3 class="qualification__title">
                                    Upcoming SWE
                                </h3>
                                <span class="qualification__subtitle">
                                    Microsoft
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2023-
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification