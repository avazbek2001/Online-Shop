import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
import { useLocation } from 'react-router-dom'

function NavbarMain() {
    const { pathname } = useLocation()
    return pathname.includes("login") ? <></> : (
        <div>
            <>
                <SubHeader />
                <Navbar />
                <NavbarBottom />
            </>
        </div>
    )
}

export default NavbarMain
