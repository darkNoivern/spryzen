import React, { useState } from 'react'

const Services = () => {

    const [frontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);

    // const modalViews = document.querySelectorAll('.services__modal'),
    //     modalBtns = document.querySelectorAll('.services__button'),
    //     modalCloses = document.querySelectorAll('.services__modal-close')

    // let modal = function (modalClick) {
    //     modalViews[modalClick].classList.add('active-modal')
    // }

    // modalBtns.forEach((modalBtn, i) => {
    //     modalBtn.addEventListener('click', () => {
    //         modal(i)
    //     })
    // })

    // modalCloses.forEach((modalClose) => {
    //     modalClose.addEventListener('click', () => {
    //         modalViews.forEach((modalView) => {
    //             modalView.classList.remove('active-modal')
    //         })
    //     })
    // })


    return (
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">
                    What i offer
                </span>
                <div className="services__container container grid">
                    {/* <!-- individual --> */}


                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">Frontend <br /> Developer</h3>
                        </div>

                        <span
                            onClick={() => { setFrontend(true); }}
                            className="button button--flex button--small button--link services__button">
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                        {
                            frontend &&
                            <div className="services__modal">
                                <div className="services__modal-content">
                                    <h4 className="services__modal-title">
                                        Frontend <br /> Developer
                                    </h4>
                                    <i
                                        onClick={() => { 
                                            setFrontend(false); 
                                            console.log('frontend')
                                        }}
                                        className="uil uil-times services__modal-close"></i>
                                    <ul className="services__modal-services grid">

                                        <li className="services__modal-service">
                                            <i className="services__modal-icon uil uil-check-circle"></i>
                                            <p>I design & develop the interface.</p>
                                        </li>

                                        <li className="services__modal-service">
                                            <i className="services__modal-icon uil uil-check-circle"></i>
                                            <p>I use modern framework ReactJS to make dynamic websites.</p>
                                        </li>

                                        <li className="services__modal-service">
                                            <i className="services__modal-icon uil uil-check-circle"></i>
                                            <p>Have experience using many frameworks and packages to make the website lively.</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        }
                    </div>


                    <div className="services__content">
                        <div>
                            <i className="uil uil-brackets-curly services__icon"></i>
                            <h3 className="services__title">Backend <br /> Developer</h3>
                        </div>

                        <span
                            onClick={() => { setBackend(true); }}
                            className="button button--flex button--small button--link services__button">
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                        {
                            backend &&
                            <div className="services__modal">
                                <div className="services__modal-content">
                                    <h4 className="services__modal-title">
                                        Backend <br /> Developer
                                    </h4>
                                    <i
                                        onClick={() => { setBackend(false); }}
                                        className="uil uil-times services__modal-close"></i>
                                    <ul className="services__modal-services grid">

                                        <li className="services__modal-service">
                                            <i className="services__modal-icon uil uil-check-circle"></i>
                                            <p>As a beginner i'm open to new technologies</p>
                                        </li>

                                        <li className="services__modal-service">
                                            <i className="services__modal-icon uil uil-check-circle"></i>
                                            <p>Experience in developing backend databases using firebase.</p>
                                        </li>

                                        {/* <li class="services__modal-service">
                                    <i class="services__modal-icon uil uil-check-circle"></i>
                                    <p>I develop the interface.</p>
                                </li>  */}

                                    </ul>
                                </div>
                            </div>
                        }

                    </div>


                    {/* 
                <div class="services__content">
                    <div>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 class="services__title">Ui/Ux <br> Designer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div class="services__modal">
                        <div class="services__modal-content">
                            <h4 class="services__modal-title">
                                Ui/Ux <br> Designer
                            </h4>
                            <i class="uil uil-times services__modal-close"></i>
                            <ul class="services__modal-services grid">

                                <li class="services__modal-service">
                                    <i class="services__modal-icon uil uil-check-circle"></i>
                                    <p>I develop the interface.</p>
                                </li>

                                <li class="services__modal-service">
                                    <i class="services__modal-icon uil uil-check-circle"></i>
                                    <p>I develop the interface.</p>
                                </li>

                                <li class="services__modal-service">
                                    <i class="services__modal-icon uil uil-check-circle"></i>
                                    <p>I develop the interface.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div> */}

                </div>
            </section>

        </>
    )
}

export default Services