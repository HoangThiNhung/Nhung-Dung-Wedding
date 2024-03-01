import React from 'react'
import SectionTitleS2 from '../SectionTitleS2'
import sImg1 from '../../images/event-shape-1.png'
import sImg2 from '../../images/event-shape-2.png'
import LocationMap from '../Modal'


const Events = [
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Tiệc nhà gái',
        li1:'Thứ 7, ngày 21/09/2024 4:00 PM',
        li2:'xóm 1, thôn Đa Phú 2, xã Thống Nhất, huyện Hưng Hà, tỉnh Thái Bình',
        li3:'0359-639-379',
    },
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Tiệc nhà trai',
        li1:'Chủ Nhật, ngày 22/09/2024 5:00 PM',
        li2:'số nhà 13, ngõ 18A, Chùa Thông, phường Sơn Lộc, tx Sơn Tây, Hà Nội',
        li3:'0359-639-379',
    },
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Tiệc tại Nhật Bản',
        li1:'Chủ Nhật, ngày 29/09/2024 12:00 PM',
        li2:'Nhà hàng ABC, toà nhà XYZ Shinjuku city 1-2-3, Tokyo, Nhật Bản',
        li3:'070-8409-9169',
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitleS2 MainTitle={'TIME AND PLACE'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>Phone : {event.li3}</li>
                                            <li><LocationMap/></li>
                                        </ul>
                                    </div>
                                    <div className="event-shape-1">
                                        <img src={event.Simg1} alt="" />
                                    </div>
                                    <div className="event-shape-2">
                                        <img src={event.Simg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;