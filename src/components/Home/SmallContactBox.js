import React from 'react'
import { FiDownload } from 'react-icons/fi'

const SmallContactBox = () => {
  return (
    <div id="small-contact-box-wrap" className="container">
        <div id="small-contact-box">
            <div id="small-contact-box-left">
                <div id="small-contact-box-text">Seem to like my work so far?<br/>Would you like to work with me?</div>
                (animate)
            </div>

            <div id="small-contact-box-right">
                <a className="download-cv-btn">DOWNLOAD CV <FiDownload/></a>
                <a className="cute-btn2">CONTACT ME!</a>
            </div>
        </div>
    </div>
  )
}

export default SmallContactBox