"use client";


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const ImageSlider = () => {
    const settings = {
        dots: true,
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://images.pexels.com/photos/39062564/pexels-photo-39062564/free-photo-of-black-and-white-photo-of-humayun-s-tomb-new-delhi.jpeg?auto=compress&w=1200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/39104444/pexels-photo-39104444/free-photo-of-black-and-white-geometry-with-flying-bird.jpeg?auto=compress&w=1200" />
                </div>
            </Slider>
        </div>
    );
}