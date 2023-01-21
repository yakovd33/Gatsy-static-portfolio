import React from 'react'

const ProjectListItem = ({ reverse, img, title, description, tags, links, type = "image", height = 'auto', width = 'auto' }) => {
  return (
    <div className={ `projects-list-item ${ reverse ? 'reverse' : '' }` }>
        <div className="project-item-right">
            <h6 className="project-megatitle">Featured Project</h6>
            <h3 className="project-title">{ title }</h3>
            
            <p className="project-description">
                { description }
            </p>

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
    </div>
  )
}

export default ProjectListItem