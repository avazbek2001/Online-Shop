import React from 'react'
import './Footer.css'
import { IoLogoApple } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagram, FaTelegram, FaYoutube, FaFacebook } from "react-icons/fa";
const currentYear = new Date().getFullYear();

function Footer() {
    const { pathname } = useLocation()
    return pathname.includes("login") || pathname.includes("admin") ? <></> : (
        <div className="container">
            <footer>
                <div className="footer__item">
                    <p className='footer_title'>Biz haqimizda</p>
                    <p>Topshirish punktlari</p>
                    <p>Vakansiyalar</p>
                </div>
                <div className="footer__item">
                    <p className='footer_title'>Foydalanuvchilarga</p>
                    <p>Biz bilan bog'laning</p>
                    <p>Savol javob</p>
                </div>
                <div className="footer__item">
                    <p className='footer_title'>Tadbirkorlarga</p>
                    <p>Uzumda Soting</p>
                    <p>Sotuvchi kabinetiga kirish</p>
                </div>
                <div className="footer__item__end">
                    <p className='footer_title'>Ilovani yuklab olish</p>
                    <div className="footer__item__end__brands">
                        <IoLogoApple />
                        <span>AppStore</span>
                        <IoLogoGooglePlaystore />
                        <span>Google Play</span>
                    </div>
                    <div className="footer__item__end__brands_icons">
                        <p className='footer_title'>Uzum ijtimoiy tarmoqlarda</p>
                        <div className="footer_icons">
                            <FaFacebook />
                            <FaInstagram />
                            <FaYoutube />
                            <FaTelegram />
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            <div className="footer__end">
                <div className="footer_end_left_info">
                    <p className='footer_end_title'>Maxfiylik kelishuvi</p>
                    <p className='footer_end_title'>Foydalanuvchi kelishuvi</p>
                </div>
                <span>«{currentYear}© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>
            </div>

        </div>
    )
}

export default Footer
