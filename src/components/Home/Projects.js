import React from 'react';
import ProjectListItem from './ProjectListItem';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { FaAppStore } from 'react-icons/fa';

const Projects = () => {
    return ( 
        <div id="projects-section">
            <div className="container">
                <div id="project-list-container">
                    <h2 className="cute-title"><span>01.</span> Some Things I’ve Built</h2>

                    <div id="projects-list">
                        <ProjectListItem
                            img="/images/projects/didilak.jpg"
                            title="Didilak"
                            year={2024}
                            reverse={ true }
                            animate={true}
                            description={
                                <>
                                    A no-code application used for planning and running complex Arduino sequences on the browser without a line of code.
                                </>
                            }
                            mainLink={"https://apps.apple.com/il/app/%D7%9E%D7%A7%D7%95%D7%A9%D7%A8%D7%95%D7%AA/id6739335171"}
                            tags={ [ 'React Native', 'Node.js', 'Express', 'Socket.io', 'Postgres', 'IOS', 'Android'] }
                            links={ [ { url: "https://apps.apple.com/il/app/%D7%9E%D7%A7%D7%95%D7%A9%D7%A8%D7%95%D7%AA/id6739335171", icon: <FaAppStore/> } ] }
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
                            img="/images/projects/market.jpg"
                            title="Market+"
                            year={2022}
                            animate={true}
                            reverse={true}
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
                            img="/images/projects/bingetracker.mp4"
                            type="video"
                            title="BingeTracker"
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
                            reverse={ false }
                        />

                        <ProjectListItem
                            img="/images/projects/alphadate.jpg"
                            title="AlphaDate"
                            year={2018}
                            reverse={true}
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

                        <ProjectListItem
                            img="/images/projects/givergetter.jpg"
                            title="Giver Getter"
                            year={2020}
                            reverse={true}
                            description={
                                <>
                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="#">Visual Studio Marketplace</a>, Package Control, <a href="#">Atom Package Manager</a>, and npm.
                                </>
                            }
                            tags={ [ 'Next.js', 'Express.js', 'Node.js',  'Postgres', 'TypeScript', 'Socket.io' ] }
                            mainLink="http://giver-getter.com/"
                            links={ [ { url: "http://giver-getter.com/", icon: <FiExternalLink/> } ] }
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;