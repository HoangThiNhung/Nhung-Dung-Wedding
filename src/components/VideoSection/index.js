import React from 'react'
import VideoModal from '../ModalVideo'
import vimg from '../../images/cta.jpg'
import SectionTitle from '../../components/SectionTitle'


const VideoSection = (props) => {
    return(
        <section className="wpo-video-section section-padding">
            <div className="container">
                <SectionTitle topTitle={'Wedding Ceremony'} MainTitle={'Celebrating Your Love'}/>
                <div className="wpo-video-item">
                    <div className="wpo-video-img">
                        <img src={vimg} alt=""/>
                        <VideoModal/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;