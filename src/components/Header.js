import React, { useState, useEffect, useCallback } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const SECTION_LINKS = [
    { label: 'HELLO', href: '#hero', targetId: 'hero-section' },
    { label: 'PORTFOLIO', href: '#projects-section', targetId: 'projects-section' },
    { label: 'SERVICES', href: '#services-section', targetId: 'services-section' },
    { label: 'CONTACT', href: '#contact-wrap', targetId: 'contact-wrap' }
];

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeLink, setActiveLink] = useState(SECTION_LINKS[0].href);

    const updateActiveLink = useCallback(() => {
        if (typeof window === 'undefined') return;
        const scrollMarker = window.scrollY + window.innerHeight * 0.25;
        let currentActive = SECTION_LINKS[0].href;

        SECTION_LINKS.forEach((link) => {
            const sectionEl = document.getElementById(link.targetId);
            if (!sectionEl) return;

            const sectionTop = sectionEl.offsetTop;
            const sectionBottom = sectionTop + sectionEl.offsetHeight;

            if (scrollMarker >= sectionTop && scrollMarker < sectionBottom) {
                currentActive = link.href;
            }
        });

        setActiveLink(currentActive);
    }, []);

    const handleScroll = useCallback(() => {
        if (typeof window === 'undefined') return;
        setScrollPosition(window.pageYOffset);
        updateActiveLink();
    }, [updateActiveLink]);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        updateActiveLink();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, updateActiveLink]);

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
                            {SECTION_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`header-link ${activeLink === link.href ? 'active' : ''}`}
                                >
                                    {link.label} <span className="underscore-hidden">_</span>
                                </a>
                            ))}
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