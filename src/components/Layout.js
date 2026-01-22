import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        AOS.init({
            duration: 750,
            once: true,
            offset: 90,
            easing: 'ease-out-cubic'
        });

        return () => {
            AOS.refreshHard();
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        AOS.refresh();
    }, [children]);

    return ( 
        <>
            <Header/>

            { children }

            <Footer/>
        </>
     );
}
 
export default Layout;