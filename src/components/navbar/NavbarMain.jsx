import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
import { useLocation } from 'react-router-dom'
import { PRODUCTS } from '../../static/index.js'

function NavbarMain() {
    const { pathname } = useLocation()
    return pathname.includes("login") ? <></> : (
        <>
            <SubHeader />
            <Navbar data={PRODUCTS} />
            <NavbarBottom />
        </>
    )
}

export default NavbarMain
