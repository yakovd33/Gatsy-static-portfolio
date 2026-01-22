import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';
import Lenis from 'lenis';

const Layout = ({ children }) => {
    const lenisRef = useRef(null);
    const rafRef = useRef(null);

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

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            smoothTouch: false,
            easing: (t) => 1 - Math.pow(1 - t, 3)
        });

        lenisRef.current = lenis;

        const raf = (time) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return ( 
        <>
            <Header/>

            { children }

            <Footer/>
        </>
     );
}
 
export default Layout;