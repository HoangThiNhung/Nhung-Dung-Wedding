import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PartnerSection extends Component {
    render() {

        return (

            <section className={`wpo-partners-section ${this.props.tNone}`}>
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="partner-grids partners-slider owl-carousel">
                                <span className="thanks">Thank You</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PartnerSection;