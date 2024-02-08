import React from 'react'
import './Navbar.css'
import { IoMenu, IoSearch } from "react-icons/io5"
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useTypewriter } from 'react-simple-typewriter'


function Navbar() {
    // input ichidagi so'zlar
    const [typeEffect] = useTypewriter({
        words: ['Elektronika', 'Maishiy Texnika', 'Salomatlik', "Uy-ro'zg'or buyumlari ", "Avtotovarlar"],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 100
    })

    const wishes = useSelector(state => state.wishes.value)
    const cart = useSelector(state => state.carts.value)

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const username = users.length > 0 ? users[0].username : null;
    return (
        <div className='container'>
            <div className="navbar">
                <NavLink to={'/'} className="navbar__logo">
                    <h2>uzum market</h2>
                </NavLink>
                <button className="navbar__category-btn">
                    <IoMenu />
                    <span>Katalog</span>
                </button>
                <div className="navbar__search">
                    <input type="text" placeholder={typeEffect} />
                    <button><IoSearch /></button>
                </div>
                <div className="navbar__collection">
                    <NavLink to={'/'} className="navbar__item">
                        <IoHome />
                        <span>Bosh Sahifa</span>
                    </NavLink>
                    <NavLink to={'/login'} className="navbar__item">
                        <FaRegUser />
                        <span> {username ? username : "Kirish"}</span>
                    </NavLink>
                    <NavLink to={'/wishes'} className="navbar__item">
                        <FaRegHeart />
                        {wishes.length > 0 ? (
                            <>
                                <b className='navbar-item-wishes'>{wishes.length}</b>
                            </>
                        ) : (
                            <span>Sevimlilar</span>
                        )}
                    </NavLink>
                    <NavLink to={'/cart'} className="navbar__item">
                        <FiShoppingCart />
                        {cart.length > 0 ? (
                            <>
                                <b className='navbar-item-cart'>{cart.length}</b>
                            </>
                        ) : (
                            <span>Savatcha</span>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
