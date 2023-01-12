import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <header id="main-header" className={ `${ scrollPosition >= 100 ? 'sticky' : '' }` }>
            <div className="container">
                <div id="main-header-wrap">
                    <div id="header-left">
                        <div id="header-logo">
                            <img src="static/images/logo-new.png" alt="" />
                        </div>

                        <div id="header-links">
                            <div className="header-link active">HELLO <span className="underscore-hidden">_</span></div>
                            <div className="header-link">SERVICES <span className="underscore-hidden">_</span></div>
                            <div className="header-link">PORTFOLIO <span className="underscore-hidden">_</span></div>
                            <div className="header-link">BLOG <span className="underscore-hidden">_</span></div>
                            <div className="header-link">CONTACT <span className="underscore-hidden">_</span></div>
                        </div>
                    </div>

                    <div id="header-right">
                        <div id="header-contact-btn-wrap">
                            <a href="#" className="cute-btn" data-back="yakovd33@gmail.com" data-front="CONTACT ME!">CONTACT ME!</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;