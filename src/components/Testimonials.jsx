import React from 'react'
import testimonial from '../assets/img/testimonial1.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    return (
        <>
            <section class="testimonial section">
                <h2 class="section__title">Testimonial</h2>
                <span class="section__subtitle">
                    My client saying
                </span>
                <Swiper
                    // install Swiper modules
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={48}
                    slidesPerView={
                        (window.innerWidth >= 1024) ? 2 : 1
                    }
                    // navigation
                    pagination={{ 
                        clickable: true,    
                        dynamicBullets: true, 
                    }}
                    //   scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    className="swiper container testimonial__container"
                >
                    {/* <div class="testimonial__container container swiper"> */}
                    {/* <div class="swiper-wrapper"> */}
                    {/* <!-- testimonial --> */}
                    <SwiperSlide class="testimonial__content swiper-slide">
                        <div class="testimonial__data">
                            <div class="testimonial__header">
                                <img src={testimonial} alt="" class="testimonial__img" />
                                <div>
                                    <h3 class="testimonial__name">Sara Smith</h3>
                                    <span class="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and
                            attention and support 24 hours a day.

                        </p>
                    </SwiperSlide>

                    {/* <!-- testimonial --> */}
                    <SwiperSlide class="testimonial__content swiper-slide">
                        <div class="testimonial__data">
                            <div class="testimonial__header">
                                <img src={testimonial} alt="" class="testimonial__img" />
                                <div>
                                    <h3 class="testimonial__name">Sara Smith</h3>
                                    <span class="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and
                            attention and support 24 hours a day.

                        </p>
                    </SwiperSlide>

                    {/* <!-- testimonial --> */}
                    <SwiperSlide class="testimonial__content swiper-slide">
                        <div class="testimonial__data">
                            <div class="testimonial__header">
                                <img src={testimonial} alt="" class="testimonial__img" />
                                <div>
                                    <h3 class="testimonial__name">Sara Smith</h3>
                                    <span class="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and
                            attention and support 24 hours a day.

                        </p>
                    </SwiperSlide>
                    {/* </div> */}
                    {/* <!-- If we need pagination --> */}
                    {/* <div class="swiper-pagination swiper-pagination-testimonial"></div> */}
                    {/* </div> */}
                </Swiper>
            </section>

        </>
    )
}

export default Testimonials