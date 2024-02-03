import React from 'react'
import './Navbar.css'
import { IoMenu, IoSearch } from "react-icons/io5"
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
    return (
        <div className='container'>
            <div className="navbar">
                <NavLink to={'/'} className="navbar__logo">
                    <h2>Uzum market</h2>
                </NavLink>
                <button className="navbar__category-btn">
                    <IoMenu />
                    <span>Katalog</span>
                </button>
                <div className="navbar__search">
                    <input type="text" placeholder='Search...' />
                    <button><IoSearch /></button>
                </div>
                <div className="navbar__collection">
                    <NavLink to={'/'} className="navbar__item">
                        <IoHome />
                        <span>Bosh Sahifa</span>
                    </NavLink>
                    <NavLink to={'/login'} className="navbar__item">
                        <FaRegUser />
                        <span>Kirish</span>
                    </NavLink>
                    <NavLink to={'/wishes'} className="navbar__item">
                        <FaRegHeart />
                        <span>Sevimlilar</span>
                    </NavLink>
                    <NavLink to={'/cart'} className="navbar__item">
                        <FiShoppingCart />
                        <span>Savat</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
