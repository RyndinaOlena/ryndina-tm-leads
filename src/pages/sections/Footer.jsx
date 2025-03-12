import React from "react";
import "../../styles/_footer.scss";
import '../../styles/_header.scss';
import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_block">
                <div className="footer_container">
                    <nav className="footer_nav">
                        <a href="#performance" className="footer_nav_link">ЦИФРЫ</a>
                        <a href="#card" className="footer_nav_link">СДЕЛКИ ОНЛАЙН</a>
                        <a href="#pricing" className="footer_nav_link">О КОМПАНИИ</a>
                        <a href="#pricing" className="footer_nav_link">TRADEBLAD ЭТО</a>
                        <a href="#pricing" className="footer_nav_link">ТАРИФЫ</a>
                        <a href="#pricing" className="footer_nav_link">FAQ</a>
                    </nav>

                </div>
                <div className="footer_logo">
                    <a href="/" className="footer_logo_link">
                        <img src={logo} alt="logo" className="footer_logo_img" />
                    </a>
                    <div className="footer_bottom">
                        <p className="footer_bottom_text">© 2022 TradeBlade. All rights reserved</p>
                    </div>
                </div>
            </div>

        </footer>

    );
};

export default Footer;
