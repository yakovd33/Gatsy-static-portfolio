import React, { useState, useEffect } from 'react';
import { BiPlay } from 'react-icons/bi'
import { TypeAnimation } from 'react-type-animation';

const titles = [
    'Program Developer',
    'Fullstack Developer',
    'UI/UX Designer'
]

const Hero = () => {
    const [ mouseX, setMouseX ] = useState(0);
    const [ mouseY, setMouseY ] = useState(0);
    const [ titleIndex, setTitleIndex ] = useState(0);

    const handleMouseMove = (e) => {
        // setMouseX(e.clientX);
        setMouseX((window.innerWidth - e.clientX * 5) / 99);
        setMouseY((window.innerHeight - e.clientY * 5) / 99);
        // setMouseY(e.clientY);

        // var sphere = document.getElementById('sphere');

        // if (sphere) {
        //     sphere.style.transform = 'rotate(340deg)'
        // }
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        // let counter = 0;
        // setInterval(() => {
        //     let title_static = document.getElementById("hero-title-static");
        //     let hero_title_general = document.getElementById("my-pro-hero-title");
            
        //     if (title_static) {
        //         hero_title_general.innerHTML += `<div id="hero-title-old">${ titles[counter] }</div>`;

        //         title_static.style.opacity = 0;
        //         console.log(titles[counter]);
        //         document.getElementById("hero-title-static").innerText = titles[counter];
                
        //         setTimeout(() => {
        //             if (document.getElementById("hero-title-old")) {
        //                 document.getElementById("hero-title-old").remove();
        //             }

        //             title_static.style.opacity = 1;
        //         }, 1000);
        //     }

        //     counter = (counter + 1) % 3;
        // }, 3000, counter);

    
        // return () => {
        //   window.removeEventListener("mousemove", handleMouseMove);
        // };
    }, []);

    var styleTagStringContent = `#my-name-hero-title:after {
        transform: translateX(${mouseX}px) translateY(${mouseY}px)
    }`;


    return (
        <div id="hero-section">
            <div className="container">
                <div id="hero-section-content">
                    <div id="hero-section-textuals">

                        <div class="cursor"></div>
                        <div class="shapes">
                            <div class="shape shape-1"></div>
                            <div class="shape shape-2"></div>
                            <div class="shape shape-3"></div>
                        </div>

                        <div id="welcome-sup-msg">WELCOME TO MY WORLD</div>
                        <div id="my-name-hero-title"><span>Hi, I’m Yakov Shitrit</span><span id="name-hidden">Hi, I’m Yakov Shitrit</span></div>
                        <div id="my-pro-hero-title">
                            <div id="hero-title-static">
                                <TypeAnimation
                                    sequence={[
                                        'Program Developer', // Types 'One'
                                        1500, // Waits 1s
                                        'UI Designer', // Deletes 'One' and types 'Two'
                                        1500, // Waits 2s
                                        'Fullstack Developer',
                                        4000
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </div>
                            {/* <div id="hero-title-new">{ titles[1] }</div> */}
                            <div id="hero-title-placeholder">----</div>
                        </div>

                        <div id="hero-paragraph">
                            I’m a fullstack developer and a programmer with a strong foundation in both front-end and back-end technologies. I am a detail-oriented problem solver experienced in creating fullstack applications and software and enjoy working on projects from conception to deployment. With a passion for building intuitive and user-friendly websites and applications. I am constantly learning and staying up-to-date with the latest development trends and best practices.
                        </div>
                        <div id="hero-buttons">
                            <a href="#" className="hero-btn active">CONTACT ME</a>
                            <a href="/Yakov Shitrit CV.pdf" target="_blank" className="hero-btn">MY RESUME <BiPlay/></a>
                        </div>
                    </div>

                    <div id="hero-section-scroll-guide">

                        <a title="Scroll Down" href="#" class="mouse-scroll" data-target="message">
                            <span class="mouse">
                                <span></span>
                            </span>
                            <span>SCROLL TO KNOW MORE</span>
                        </a>
                    </div>
                </div>
            </div>

            <style>
                { styleTagStringContent }
            </style>
        </div>
    );
}
 
export default Hero;