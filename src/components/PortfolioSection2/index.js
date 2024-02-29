import React from 'react'
import SectionTitleS2 from '../SectionTitleS2'
import pImg1 from '../../images/portfolio/13.jpg'
import pImg2 from '../../images/portfolio/8.jpg'
import pImg3 from '../../images/portfolio/9.jpg'
import pImg4 from '../../images/portfolio/10.jpg'
import pImg5 from '../../images/portfolio/11.jpg'
import pImg6 from '../../images/portfolio/14.jpg'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const Portfolios = [
    {
        Pimg:pImg1,
    },
    {
        Pimg:pImg2,
    },
    {
        Pimg:pImg3,
    },
    {
        Pimg:pImg4,
    },
    {
        Pimg:pImg5,
    },
    {
        Pimg:pImg6,
    },
] 

const PortfolioSection2 = (props) => {
    return(
        <section className={`wpo-portfolio-section-s3 section-padding ${props.pClass}`} id="gallery">
            <div className="container">
                <SectionTitleS2 MainTitle={'Sweet Moments'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <ReactFancyBox
                                                thumbnail={portfolio.Pimg}
                                                image={portfolio.Pimg}
                                                />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection2;