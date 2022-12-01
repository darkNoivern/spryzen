import React from 'react'
import gateamigos from '../assets/img/gateamigos.png'
import cryptozenin from '../assets/img/cryptozenin.png'
import cupidify from '../assets/img/cupidify.png'
import daisyblogs from '../assets/img/daisyblogs.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const Portfolio = () => {
    return (
        <>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">
                    Portfolio
                </h2>
                <span className="section__subtitle">
                    Most recent title
                </span>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="portfolio__container container">

                    <SwiperSlide className="portfolio__content grid swiper-slide">
                        <img src={gateamigos} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">GateAmigos</h3>
                            <p className="portfolio__description">
                                Website to practice Gate questions and interact with fellow Gate community.
                            </p>
                            <a href="https://gate-amigos.vercel.app" className="button button--flex button--small portfolio__button">
                                Demo <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid swiper-slide">
                        <img src={daisyblogs} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">daisyBlogs</h3>
                            <p className="portfolio__description">
                                Website for the people to write blogs and share their thoughts to the world.
                            </p>
                            <a href="https://lycanroc.vercel.app/" className="button button--flex button--small portfolio__button">
                                Demo <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className="portfolio__content grid swiper-slide">
                        <img src={cupidify} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Cupidify</h3>
                            <p className="portfolio__description">
                                Valetine themed website made by Team Valtryek with a dream to surprise our fellow college-mates.
                            </p>
                            <a href="https://cupidify.vercel.app/" className="button button--flex button--small portfolio__button">
                                Demo <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid swiper-slide">
                        <img src={cryptozenin} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Cryptozenin</h3>
                            <p className="portfolio__description">
                                Website to observe fluctuating market of the cryptos.
                            </p>
                            <a href="https://cryptozenin.vercel.app/" className="button button--flex button--small portfolio__button">
                                Demo <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>

                    {/* <!-- If we need pagination --> */}
                    {/* <div class="swiper-pagination"></div>

                    <div class="swiper-button-next">
                        <i class="class uil uil-angle-right-b swiper-portfolio-icon"></i>
                    </div>
                    <div class="swiper-button-prev">
                        <i class="class uil uil-angle-left-b swiper-portfolio-icon"></i>
                    </div> */}

                </Swiper>
            </section>

        </>
    )
}

export default Portfolio