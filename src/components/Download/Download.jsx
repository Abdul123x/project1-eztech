import React from 'react'
import { assets } from '../../assets/assets'
import './Download.css'
const Download = () => {
  return (
    <div className='download'>
        <div className="left_download">
        <div className="image_download">
        </div>
        <img src={assets.phonecopy} alt="" /> 
        </div>
        <div className="right_download">
            <h1>Learning <span>anytime</span> from any where</h1>
            <p>Increase the mobility level with Ezline Technologies LMS App. Take your courses in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modren LMS app.</p>
            <div className="download_img">
                <img src={assets.appstorecopy} alt="" />
                <img src={assets.playstore} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Download