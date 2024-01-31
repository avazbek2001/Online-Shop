import React from 'react'
import './Banner.css'
import bannerPhoto from '../../assets/photo_2024-01-30_15-01-48.jpg'
function Banner() {
    return (
        <div className='banner conatiner'>
            <img src={bannerPhoto} alt="" />
        </div>
    )
}

export default Banner
