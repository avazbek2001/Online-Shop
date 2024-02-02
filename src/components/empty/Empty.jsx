import React from 'react'
import './Empty.css'
import { useNavigate } from 'react-router-dom'

function Empty({ img, title, btn_word, info, link }) {
    const navigate = useNavigate()

    return (
        <div className="empty">
            <div className='container'>
                <img className='empty__image' src={img} alt="" />
                <h2 className='empty__title'>{title}</h2>
                <p className='empty__info'>{info}</p>
                <button className='empty__button' onClick={() => navigate(link)}>{btn_word}</button>
            </div>
        </div>
    )
}

export default Empty
