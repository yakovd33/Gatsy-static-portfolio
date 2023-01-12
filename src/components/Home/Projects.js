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
                            img="/static/images/projects/totseret.png"
                            title="SuperMarket+"
                            description={
                                <>
                                    Supermarket webapp built with <a href="https://nextjs.org/">next.js</a> as the frontend framework and headless Wordpress as the CMS for product and orders management.
                                </>
                            }
                            tags={ [ 'Next.js', 'Wordpress', 'SASS' ] }
                            links={ [ { url: "", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/static/images/projects/bingetracker.mp4"
                            type="video"
                            title="BingeTracker"
                            description={
                                <>
                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="#">Visual Studio Marketplace</a>, Package Control, <a href="#">Atom Package Manager</a>, and npm.
                                </>
                            }
                            // height="20vw"
                            // width="34vw"
                            tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript' ] }
                            links={ [ { url: "https://github.com/yakovd33/BingeTracker", icon: <AiFillGithub/> }, { url: "https://binge-tracker.vercel.app/shows", icon: <FiExternalLink/> } ] }
                            reverse={ true }
                        />

                        <ProjectListItem
                            img="/static/images/projects/bingetracker.jpeg"
                            title="AlphaDate"
                            description={
                                <>
                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="#">Visual Studio Marketplace</a>, Package Control, <a href="#">Atom Package Manager</a>, and npm.
                                </>
                            }
                            tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript' ] }
                            links={ [ { url: "https://google.com", icon: <AiFillGithub/> }, { url: "", icon: <FiExternalLink/> } ] }
                        />

                        <ProjectListItem
                            img="/static/images/projects/bingetracker.jpeg"
                            title="Giver Getter"
                            description={
                                <>
                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="#">Visual Studio Marketplace</a>, Package Control, <a href="#">Atom Package Manager</a>, and npm.
                                </>
                            }
                            tags={ [ 'Next.js', 'Express.js', 'Postgres', 'TypeScript' ] }
                            links={ [ { url: "https://google.com", icon: <AiFillGithub/> }, { url: "", icon: <FiExternalLink/> } ] }
                            reverse={ true }
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;