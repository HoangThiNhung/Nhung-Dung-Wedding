import React, {Fragment} from 'react';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import PartnerSection from '../../components/PartnerSection';
import ServiceSection from '../../components/ServiceSection';
import VideoSection from '../../components/VideoSection';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/ProjectSection';
import Testimonial from '../../components/Testimonial';
import Product from '../../components/Product'
import CtaSection from '../../components/CtaSection';
import PricingSection from '../../components/PricingSection';
import BannerSection from '../../components/BannerSection';
import RSVP from '../../components/RSVP';
import BlogSection from '../../components/BlogSection';
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';



const HomePage =({ addToCart }) => {

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

    const products = productsArray

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <div className="wpo-box-style">
                <Hero/>
                <PartnerSection/>
                <ServiceSection/>
                <VideoSection/>
                <FunFact/>
                <ProjectSection/>
                <Testimonial/>
                <Product
                    addToCartProduct={addToCartProduct}
                    products={products}
                />
                <CtaSection/>
                <PricingSection/>
                <BannerSection/>
                <RSVP/>
                <BlogSection/>
                <Footer/>
            </div>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(HomePage);