import React from 'react'
import './Work.css'
import { assets } from '../../assets/assets'
const Work = () => {
  return (
    <div className='work'>
       <h1>How it works?</h1>
       <div className="work_images">
        <img className='book_img' src={assets.book} alt="" />
        <img className='boy_img' src={assets.boy} alt="" />
        <img className='girl_img' src={assets.girl} alt="" />
       </div>
    </div>
  )
}

export default Work