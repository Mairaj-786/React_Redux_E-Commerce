import React from 'react'
import { Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Rotate from 'react-reveal/Rotate';

const carousel = () => {
    return (
        <div className="Home">
            <Carousel>
                <Carousel.Item>
                    <div className="first_slide">
                        <div className="first_slide_text">
                            <b>New arrivals</b>

                            <Rotate top left>
                                <h1>Red shoes paint with belt</h1>
                            </Rotate>
                            <Slide right cascade>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</p>
                                    <p>Dolorum tenetur, odit quidem corporis aliquam mollitia</p>
                                    <p>aut nostrum possimus? Tempora quasi dolor est quas accusantium aliquam dolorem ea ad blanditiis quod?</p>

                                </div>
                            </Slide>



                            <div className="btns">
                                <ul>
                                    <li><a href="#" className="btnblack">discover</a></li>
                                    <li><a href="#" className="btnwhite">Add to cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="second_slide">
                        <div className="first_slide_text">
                            <b>New arrivals</b>

                            <Rotate top left>
                                <h1>Denim jacket</h1>
                            </Rotate>
                            <Rotate bottom right cascade>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
elit.</p>
                                    <p>Dolorum tenetur, odit quidem corporis aliquam mollitia</p>
                                    <p>aut nostrum possimus? Tempora quasi dolor est quas accusantium aliquam dolorem ea ad blanditiis quod?</p>
                                </div>
                            </Rotate>
                            <div className="btns">
                                <ul>
                                    <li><a href="#" className="btnblack">discover</a></li>
                                    <li><a href="#" className="btnwhite">Add to cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="third_slide">
                        <div className="first_slide_text">
                            <div className="pink_logo">
                                <b>from </b>
                                <h1>$20</h1>
                                <p>Shop now</p>
                            </div>
                            <b>New arrivals</b>

                            <Fade right>
                                <h1>Sweet shirt and jeans</h1>
                            </Fade>
                            <Rotate bottom right cascade>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
elit.</p>
                                    <p>Dolorum tenetur, odit quidem corporis aliquam mollitia</p>
                                    <p>aut nostrum possimus? Tempora quasi dolor est quas accusantium aliquam dolorem ea ad blanditiis quod?</p>
                                </div>
                            </Rotate>
                            <div className="btns">
                                <ul>
                                    <li><a href="#" className="btnblack">discover</a></li>
                                    <li><a href="#" className="btnwhite">Add to cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default carousel
