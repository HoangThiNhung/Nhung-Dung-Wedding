import React from 'react'
import SectionTitleS2 from '../SectionTitleS2'
// import sImg1 from '../../images/event-shape-1.png'
// import sImg2 from '../../images/event-shape-2.png'

const HopMungCuoi = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitleS2 MainTitle={'Hộp Mừng Cưới'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                      <div className="col col-md-6 col-12">
                          <div className="wpo-event-item">
                              <div className="wpo-event-text">
                                  
                              </div>
                          </div>
                      </div>
                      <div className="col col-md-6 col-12">
                          <div className="wpo-event-item">
                              <div className="wpo-event-text">
                                  
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HopMungCuoi;