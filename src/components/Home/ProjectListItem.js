import React from 'react'

const ProjectListItem = ({ reverse, img, title, description, tags, links, year, type = "image", height = 'auto', width = 'auto', animate = false, mainLink = null }) => {
    return (
        <div className={ `projects-list-item ${ reverse ? 'reverse' : '' } ${animate ? 'animate' : ''}` }>
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
                { tags && tags.map((tag, idx) => (
                    <span className="project-tag" key={`tag-${idx}`}>{ tag }</span>
                )) }
            </div>

            <div className="project-links">
                { links && links.map((link, idx) => (
                    <a className="project-link" target="_blank" rel="noopener noreferrer" href={ link.url } key={`plink-${idx}`}>{ link.icon }</a>
                )) }
                
                <a className="project-link"></a>
            </div>
        </div>

        <div className="project-item-left">
            { type == 'image' && (
                mainLink ? (
                    <a href={mainLink} target="_blank" rel="noopener noreferrer">
                        <img src={ img } style={{height, width}}/>
                    </a>
                ) : (
                    <img src={ img } style={{height, width}}/>
                )
            ) }

            { type == 'video' && (
                <video autoPlay loop muted style={{height, width}}>
                    <source src={img} type="video/mp4"/>
                </video>
            ) }
        </div>
    </div>
  )
}

export default ProjectListItem