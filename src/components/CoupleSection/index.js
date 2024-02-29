import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/girl.png'
// import coupleImg2 from '../../images/couple/1.jpg'
// import coupleImg3 from '../../images/couple/shape.png'
// import frame from '../../images/couple/khung.png'
import shape2 from '../../images/couple/shape2.png'
import coupleImg4 from '../../images/couple/boy.png'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className={`couple-section section-padding ${this.props.cClass}`} id="couple">
                <div className="container">
                    <div className="couple-area clearfix">
                        <div className="align-items-center">
                            <div className="row text-grid bride">
                                <div className="col-lg-4 col-sm-12 couple-img">
                                    <img src={coupleImg1} alt=""/>
                                </div>
                                <div className="col-lg-8 col-sm-12 info">
                                    <h2>Daniel Oliver</h2>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis give you com of system. </p>
                                    {/* <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row text-grid groom">
                                <div className="col-lg-8 col-sm-12 info revert-direction">
                                    <h2>Sarah Margrate</h2>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis give you com of system.</p>
                                    {/* <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="col-lg-4 col-sm-12 couple-img">
                                    <img src={coupleImg4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;