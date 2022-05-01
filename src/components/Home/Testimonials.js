import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: true,
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-prev">Next</button>',
    };

    return (
        <div id="testimonials-section">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>

            <div className="container">
                <div className="section-content">
                    <div className="section-title">
                        <div className="sup">TESTIMONIALS</div>
                        <div className="main">WHAT DO MY <strong>CLIENTS</strong> HAVE TO SAY</div>
                    </div>

                    <div id="testimonials-wrap">
                        <Slider {...settings}>
                            <TestimonialItem/>
                            <TestimonialItem/>
                            <TestimonialItem/>
                            <TestimonialItem/>
                            <TestimonialItem/>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
