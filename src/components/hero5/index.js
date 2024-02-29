import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coupleName from '../../images/slider/name.png'
import hero1 from '../../images/slider/slide-7.jpg'
import hero2 from '../../images/slider/slide-8.jpg'
import hero3 from '../../images/slider/slide-9.jpg'
import TimeCountDown from "../countdown";



class Hero5 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-hero-slider wpo-hero-style-3">
                <div className="wedding-announcement">
                    <div className="couple-text">
                        {/* <h2 className="slideInUp">Anh Dũng & Hoàng Nhung</h2>
                        <p className="slideInUp">We Are Getting Married Sep 22,2024</p> */}
                        <img src={coupleName} alt="" />
                        <TimeCountDown/>
                    </div>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero5;