import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const BtnClick = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = { username, password };
        users.unshift(user);
        localStorage.setItem("users", JSON.stringify(users));
        setPassword("");
        setUsername("");
    };

    const showAlert = () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.map(user => user.username).join('');
        alert(`Your username is: ${username}`);
    };

    return (
        <div className='container'>
            <form className='login__form' onSubmit={BtnClick}>
                <div className="login__form__info">
                    <h3 className='login__title'>Tizimga Kirish</h3>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='login__input'
                        type="text"
                        placeholder='Enter username'
                        name="username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='login__input'
                        type="password"
                        placeholder='Enter password'
                        name="password"
                    />
                    <div className="checkbox__info">
                        <span>
                            <input className='checkbox' type="checkbox" /> Remember me
                        </span>
                        <div>
                            <span>Forgot Password</span>
                        </div>
                    </div>
                    <button onClick={showAlert} type='submit' className='login__button'> Kirish</button>
                    <NavLink to={'/'}>Bosh sahifaga qaytish</NavLink>
                </div>
            </form>
        </div>
    );
}

export default Login;
