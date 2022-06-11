import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const ProjectListItem = ({ reverse, img, title, description, tags }) => {
  return (
    <div className={ `projects-list-item ${ reverse ? 'reverse' : '' }` }>
        <div className="project-item-right">
            <h6 className="project-megatitle">Featured Project</h6>
            <h3 className="project-title">{ title }</h3>
            <p className="project-description">
                { description }
            </p>

            <div className="project-tags">
                { tags.map((tag) => {
                    <span className="project-tag">{ tag }</span>
                }) }
            </div>

            <div className="project-links">
                <a className="project-link"><AiFillGithub/></a>
                <a className="project-link"><AiFillGithub/></a>
            </div>
        </div>

        <div className="project-item-left">
            <img src={ img }/>
        </div>
    </div>
  )
}

export default ProjectListItem