import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Congratulations from '../../components/Congratulations';

// import vec3 from '../../images/contact/couple.png'
import vec3 from '../../images/contact/couple2.png'
// import vec2 from '../../images/contact/2.png'
import vec2 from '../../images/contact/right.png'

class RSVP extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        join: '',
        showCongratulations: false,
        error: {}
    }

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const { name,
            email,
            message,
            join,
            error,
        } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (message === '') {
            error.message = "Please enter your message";
        }
        if (join === '') {
            error.join = "Hãy xác nhận khả năng tham gia của bạn";
        }

        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.message === '' && error.join === '') {
            try {
                const response = await fetch('https://k0cje4non2.execute-api.ap-northeast-1.amazonaws.com/v1/greetings', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name: name, email: email, message: message, join: join }),
                });

                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    join: '',
                    showCongratulations: true,
                    error: {}
                })
          
                if (!response.ok) throw new Error('Error in API call');
            } catch (error) {
                console.error('Failed to submit confirmation:', error);
            }
        }
    }

    render(){
        const { name,
            email,
            message,
            join,
            showCongratulations,
            error } = this.state;

        return(
            <section className="wpo-contact-section section-padding" id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle topTitle={'Sổ Lưu Bút'} MainTitle={'Để lại lời chúc của bạn tại đây nhé!'}/>
                            <form onSubmit={this.submitHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Họ & Tên" required/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={email} type="email" className="form-control" name="email" placeholder="Email"/>
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <textarea onChange={this.changeHandler} value={message} type="text" className="form-control" name="message" placeholder="Lời chúc" required/>
                                            <p>{error.message ? error.message : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <select name="join" className="form-control last" value={join} onChange={this.changeHandler} required>
                                                <option value="">Xác nhận tham gia tiệc</option>
                                                <option>Có tham gia tiệc nhà gái</option>
                                                <option>Không tham gia tiệc nhà gái</option>
                                                <option>Có tham gia tiệc nhà trai</option>
                                                <option>Không tham gia tiệc nhà trai</option>
                                                <option>Có tham gia tiệc ở Nhật</option>
                                                <option>Không tham gia tiệc ở Nhật</option>
                                            </select>
                                        </div>
                                        <p>{error.join ? error.join : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Gửi lời chúc</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <Congratulations show={showCongratulations} />
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <img src={vec3} alt=""/>
                        </div>
                        <div className="vector-2">
                            <img src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  RSVP;