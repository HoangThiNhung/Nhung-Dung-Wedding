import React from 'react'
import SectionTitleS2 from '../SectionTitleS2'
import sImg1 from '../../images/portfolio/1.jpg'
import sImg2 from '../../images/portfolio/2.jpg'
// import sImg3 from '../../images/portfolio/3.jpg'
// import sImg4 from '../../images/portfolio/4.jpg'

// import shape from '../../images/story/shape.png'




const StorySection = (props) => {
    return(
        <section className="story-section section-padding" id="story">
            <div className="container">
                <SectionTitleS2 MainTitle={'Our Love Story'}/>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="round-shape"></div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 text-holder revert-direction">
                                    <div className="story-text right-align-text">
                                        <h3>Lễ ăn hỏi</h3>
                                        <span className="date">Sep 22,2024</span>
                                        <p>I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder">
                                        <img src={sImg1} alt="" className="img img-responsive"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <img src={sImg2} alt="" className="img img-responsive"/>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <h3>Lễ cưới</h3>
                                        <span className="date">Sep 22,2024</span>
                                        <p>I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-wedding-rings"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection;