import React, { useState } from 'react';
import ProjectListItem from './ProjectListItem';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

const miniProjects = [
    {
        title: 'Fontest — Font testing',
        description: 'Quickly test fonts on any page.',
        icon: '/images/projects/small/fontest.png',
        link: 'https://chromewebstore.google.com/detail/fontest-%E2%80%94-font-testing/nifpgikdnbihfobboonfjpmdlppeeoom?authuser=0&hl=en-GB',
        github: 'https://github.com/yakovd33/fontest'
    },
    {
        title: 'Message via WhatsApp',
        description: 'Send WhatsApp messages without saving contacts.',
        icon: '/images/projects/small/whatsapp-sender.png',
        link: 'https://chromewebstore.google.com/detail/message-via-whatsapp/obcfmbihiocgfmgflfidjlildciokgif?authuser=0&hl=en-GB',
        github: 'https://github.com/yakovd33/message-via-whatsapp-chrome'
    }
];

const Projects = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    return ( 
        <div id="projects-section">
            <div className="container">
                <div id="project-list-container">
                    <h2 className="cute-title"><span>01.</span> Some Things I’ve Built</h2>

                    <div id="projects-list">
                        <ProjectListItem
                            img="/images/projects/market.jpg"
                            title="Market+"
                            year={2022}
                            animate={true}
                            description={
                                <>
                                    Supermarket webapp I designed and built with <a href="https://nextjs.org/">Next.js</a> as the frontend framework and headless Wordpress as the CMS for product and orders management.
                                </>
                            }
                            tags={ [ 'Next.js', 'Wordpress', 'SASS', 'UI/UX' ] }
                            mainLink="https://shuk-haikarim.com/"
                            links={ [ { url: "https://shuk-haikarim.com/", icon: <FiExternalLink/> }, { url: "https://www.supermaimon.com/", icon: <FiExternalLink/> }, { url: "https://totseret-bait.com/", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/didilak.jpg"
                            title="Didilak"
                            year={2024}
                            reverse={ true }
                            animate={true}
                            description={
                                <>
                                    An IOS/Android app portal designed for girls looking for beauty and cosmetic services near them.
                                </>
                            }
                            mainLink={"https://apps.apple.com/il/app/%D7%9E%D7%A7%D7%95%D7%A9%D7%A8%D7%95%D7%AA/id6739335171"}
                            tags={ [ 'React Native', 'Node.js', 'Express', 'Socket.io', 'Postgres', 'IOS', 'Android'] }
                            links={ [ { url: "https://apps.apple.com/il/app/%D7%9E%D7%A7%D7%95%D7%A9%D7%A8%D7%95%D7%AA/id6739335171", icon: <FaAppStore/> }, { url: 'https://play.google.com/store/apps/details?id=com.didilak', icon: <FaGooglePlay/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/arduino.png"
                            title="ArduinoStudio"
                            year={2023}
                            reverse={ false }
                            animate={true}
                            description={
                                <>
                                    A no-code application used for planning and running complex Arduino sequences on the browser without a line of code.
                                </>
                            }
                            mainLink="https://arduinostudio.com/"
                            tags={ [ 'Electron.js', 'Next.js', 'Node.js', 'Canvas', 'Socket.io', 'SASS', 'UI/UX' ] }
                            links={ [ { url: "https://arduinostudio.com/", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/superboker.jpg"
                            title="Superboker"
                            year={2025}
                            reverse={ true }
                            animate={true}
                            description={
                                <>
                                    An e-commerce web app for a morning delivery service.
                                </>
                            }
                            mainLink={"http://superboker.co.il/"}
                            tags={ [ 'React', 'Node.js', 'Express', 'Postgres', 'Vite', 'Tailwind.css'] }
                            links={ [ { url: "http://superboker.co.il/", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/pryerek.jpg"
                            title="Pryerek.co.il"
                            animate={true}
                            year={2021}
                            reverse={false}
                            description={
                                <>
                                     An online ecommerce website with a full feature admin panel designed and built by me.
                                </>
                            }
                            tags={ [ 'Next.js', 'Node.js', 'Express.js', 'MongoDB' ] }
                            mainLink="http://pryerek.co.il/"
                            links={ [ { url: "https://github.com/yakovd33/fruits-shop-react", icon: <AiFillGithub/> }, { url: "http://pryerek.co.il/", icon: <FiExternalLink/> } ] }
                        />

                        <div className={`extra-projects ${showMoreProjects ? 'open' : ''}`}>
                            <ProjectListItem
                                img="/images/projects/bingetracker.mp4"
                                type="video"
                                title="BingeTracker"
                                reverse={true}
                                year={2021}
                                description={
                                    <>
                                        A TV and movie tracking webapp built with <a href="https://nextjs.org/">Next.js</a> and Node.js. Using IMDB and other API's to show and track every show and episode out there.
                                    </>
                                }
                                // height="20vw"
                                // width="34vw"
                                tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript', 'UI/UX' ] }
                                mainLink="https://binge-tracker.vercel.app/shows"
                                links={ [ { url: "https://github.com/yakovd33/BingeTracker", icon: <AiFillGithub/> }, { url: "https://binge-tracker.vercel.app/shows", icon: <FiExternalLink/> } ] }
                            />

                            <ProjectListItem
                                img="/images/projects/alphadate.jpg"
                                title="AlphaDate"
                                year={2018}
                                animate={true}
                                description={
                                    <>
                                         A full feature dating website built with PHP. It has stories, feed with posts, likes and comments, messaging, Tinder style matching and ranking system, date management, flowers and more...
                                    </>
                                }
                                tags={ [ 'PHP', 'handlebars.js', 'MySQL', 'Socket.io', 'UI/UX' ] }
                                mainLink="http://alphadate.eropa.co.il/"
                                links={ [ { url: "https://github.com/yakovd33/AlphaDate-Dating-Webapp-In-PHP", icon: <AiFillGithub/> }, { url: "http://alphadate.eropa.co.il/", icon: <FiExternalLink/> } ] }
                            />
                        </div>
                    </div>

                    <div className="load-more-wrapper">
                        <button
                            type="button"
                            className={`load-more-projects ${showMoreProjects ? 'open' : ''}`}
                            onClick={() => setShowMoreProjects(!showMoreProjects)}
                        >
                            <span className="load-more-label">
                                { showMoreProjects ? 'Show fewer projects' : 'Load more projects' }
                            </span>
                            <span className="load-more-indicator" aria-hidden="true"></span>
                        </button>
                    </div>

                        <h4 className="mini-projects-title">
                            Small Projects — Chrome Extensions
                        </h4>
                        <div id="mini-projects">
                            {miniProjects.map((project) => (
                                <div className="mini-project" key={project.title}>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mini-project-mainlink"
                                    >
                                        <img
                                            src={project.icon}
                                            alt={`${project.title} icon`}
                                        />
                                    </a>
                                    <div className="mp-text">
                                        <a
                                            className="mp-title"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                        <div className="mp-desc">{project.description}</div>
                                    </div>
                                    <div className="mini-project-links">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Chrome Web Store"
                                        >
                                            <FiExternalLink />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="GitHub Repository"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;