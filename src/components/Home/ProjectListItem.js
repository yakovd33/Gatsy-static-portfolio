import { Link } from 'gatsby'
import React from 'react'

const ProjectListItem = ({ reverse, img, title, description, tags, links, year, type = "image", height = 'auto', width = 'auto', animate = false, mainLink = null }) => {
  return (
    <Link href={`${mainLink ? mainLink : ''}`} target="_blank" className={ `projects-list-item ${ reverse ? 'reverse' : '' } ${animate ? 'animate' : ''}` }>
        <div className="project-item-right">
            <h6 className="project-megatitle">Featured Project</h6>
            <h3 className="project-title">{ title }</h3>
            
            <p className="project-description">
                { description }
            </p>

            <div className="project-year">
                <span>YEAR: <strong>{year}</strong></span>
            </div>

            <div className="project-tags">
                { tags && tags.map((tag) => (
                    <span className="project-tag">{ tag }</span>
                )) }
            </div>

            <div className="project-links">
                { links && links.map((link) => (
                    <a className="project-link" target="_blank" href={ link.url }>{ link.icon }</a>
                )) }
                
                <a className="project-link"></a>
            </div>
        </div>

        <div className="project-item-left">
            { type == 'image' && (
                <img src={ img } style={{height, width}}/>
            ) }

            { type == 'video' && (
                <video autoplay="autoplay" loop muted style={{height, width}}>
                    <source src={img} type="video/mp4"/>
                </video>
            ) }
        </div>
    </Link>
  )
}

export default ProjectListItem