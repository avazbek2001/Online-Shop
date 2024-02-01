import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className='container'>
            <form action="">
                <div className="login__form__info">
                    <h3 className='login__title'>Tizimga Kirish</h3>
                    <label htmlFor="">Username</label>
                    <input className='login__input' type="text" placeholder='Enter username' name="" id="" />
                    <label htmlFor="">Password</label>
                    <input className='login__input' type="text" placeholder='Enter password' name="" id="" />
                    <div className="checkbox__info">
                        <input className='checkbox' type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <button className='login__button'> Kirish</button>
                    <NavLink to={'/'}>Bosh sahifaga qaytish</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login
