import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default ({children}) => {
    console.log({children});
    return(
        <div>
            <Header text="GatsBy Blog Site" />
            {children}
            <Footer />
        </div>
    )
}