import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';

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

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return ( 
        <header id="main-header" className={ `${ scrollPosition >= 100 ? 'sticky' : '' }` }>
            <div className="container">
                <div id="main-header-wrap">
                    <div id="header-left">
                        <div id="header-logo">
                            <img src="/images/logo-one-bracket.png" alt="" />
                            <img src="/images/logo-bracket.png" id="logo-bracket" alt="" />
                        </div>

                        <div id="header-links">
                            <a href="#hero" className="header-link active">HELLO <span className="underscore-hidden">_</span></a>
                            <a href="#projects-section" className="header-link">PORTFOLIO <span className="underscore-hidden">_</span></a>
                            <a href="#services-section" className="header-link">SERVICES <span className="underscore-hidden">_</span></a>
                            <a href="#contact-wrap" className="header-link">CONTACT <span className="underscore-hidden">_</span></a>
                            <a onClick={() => openInNewTab('https://eropa.co.il')} className="header-link">MY AGENCY <span className="underscore-hidden">_</span></a>
                        </div>
                    </div>

                    <div id="header-right">
                        <div id="header-contact-btn-wrap">
                            <a href="https://github.com/yakovd33" target="_blank" className="cute-btn" data-back="yakovd33@gmail.com" data-front="CONTACT ME!">
                                <AiFillGithub />
                                <span>MY GITHUB!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;