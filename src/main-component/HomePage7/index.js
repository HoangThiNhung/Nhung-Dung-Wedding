import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import Hero7 from '../../components/hero7';
import Logo from "../../images/logo.png";



const HomePage7 =() => {

    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <Hero7/>
        </Fragment>
    )
};

export default HomePage7;