import React from 'react';
import ProjectListItem from './ProjectListItem';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    return ( 
        <div id="projects-section">
            <div className="container">
                <div id="project-list-container">
                    <h2 className="cute-title"><span>01.</span> Some Things I’ve Built</h2>

                    <div id="projects-list">
                        <ProjectListItem
                            img="/images/projects/market.jpg"
                            title="Market+"
                            description={
                                <>
                                    Supermarket webapp I designed and built with <a href="https://nextjs.org/">Next.js</a> as the frontend framework and headless Wordpress as the CMS for product and orders management.
                                </>
                            }
                            tags={ [ 'Next.js', 'Wordpress', 'SASS', 'UI/UX' ] }
                            links={ [ { url: "https://www.supermaimon.com/", icon: <FiExternalLink/> }, { url: "https://totseret-bait.com/", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/bingetracker.mp4"
                            type="video"
                            title="BingeTracker"
                            description={
                                <>
                                    A TV and movie tracking webapp built with <a href="https://nextjs.org/">Next.js</a> and Node.js. Using IMDB and other API's to show and track every show and episode out there.
                                </>
                            }
                            // height="20vw"
                            // width="34vw"
                            tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript', 'UI/UX' ] }
                            links={ [ { url: "https://github.com/yakovd33/BingeTracker", icon: <AiFillGithub/> }, { url: "https://binge-tracker.vercel.app/shows", icon: <FiExternalLink/> } ] }
                            reverse={ true }
                        />

                        <ProjectListItem
                            img="/images/projects/alphadate.jpg"
                            title="AlphaDate"
                            description={
                                <>
                                     A full feature dating website built with PHP. It has stories, feed with posts, likes and comments, messaging, Tinder style matching and ranking system, date management, flowers and more...
                                </>
                            }
                            tags={ [ 'PHP', 'handlebars.js', 'MySQL', 'Socket.io', 'UI/UX' ] }
                            links={ [ { url: "https://github.com/yakovd33/AlphaDate-Dating-Webapp-In-PHP", icon: <AiFillGithub/> }, { url: "http://alphadate.eropa.co.il/", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/images/projects/bingetracker.jpeg"
                            title="Giver Getter"
                            description={
                                <>
                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="#">Visual Studio Marketplace</a>, Package Control, <a href="#">Atom Package Manager</a>, and npm.
                                </>
                            }
                            tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript' ] }
                            links={ [ { url: "http://giver-getter.com/", icon: <FiExternalLink/> } ] }
                            reverse={ true }
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;