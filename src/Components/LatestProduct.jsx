import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-bootstrap';

const LatestProduct = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=" LatestProduct">
            <h2 className="text-center"> LATEST PRODUCTS</h2>
            <Slider {...settings}>
                <div className="setCartIcon">
                    <img src="/images/men.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>
                <div className="setCartIcon">
                    <img src="/images/men2.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>
                <div className="setCartIcon"
                >
                    <img src="/images/men3.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>
                <div className="setCartIcon">

                    <img src="/images/men4.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>
                <div className="setCartIcon">

                    <img src="/images/men5.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>
                <div className="setCartIcon"
                >
                    <img src="/images/men6.jpg" alt="" />
                    <div className="price">
                        <p>Jacket </p>
                        <b className="ml-auto">$99.00</b>
                    </div>
                </div>


            </Slider>
        </div>
    );
}

export default LatestProduct
