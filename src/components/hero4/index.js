import React from 'react'
import { Link } from 'react-router-dom'
import hImg1 from '../../images/slider/shape5.png'
import hImg2 from '../../images/slider/couple.png'
import hImg3 from '../../images/slider/shape6.png'
import hImg4 from '../../images/slider/flower1.png'
import hImg5 from '../../images/slider/flower2.png'


const Hero4 = (props) => {
    return(
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="text-grid bride">
                                <div className="couple-img">
                                    <img src={hImg1} alt=""/>
                                </div>
                                <h3>Daniel Oliver</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis. </p>
                                <div className="social">
                                    <ul>
                                        <li><Link to="/hero4"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/hero4"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/hero4"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="middle-couple-pic">
                                <img src={hImg2} alt=""/>
                            </div>
                            <div className="text-grid groom">
                                <div className="couple-img">
                                    <img src={hImg3} alt=""/>
                                </div>
                                <h3>Sarah Margrate</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis. </p>
                                <div className="social">
                                    <ul>
                                        <li><Link to="/hero4"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/hero4"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/hero4"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flower-shape-1"><img src={hImg4} alt=""/></div>
            <div className="flower-shape-2"><img src={hImg5} alt=""/></div>
        </section>
    )
}

export default Hero4;