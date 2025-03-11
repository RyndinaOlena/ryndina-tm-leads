// import React from "react";
// import "../../styles/sections/_footer.scss";
// import '../../styles/sections/header.scss';
// import logo from '../../img/logo.svg'
// const Footer = () => {
//     return (
//         <footer className="footer">


//             <nav className="footer-nav">
//                 <a href="#performance">ЦИФРЫ</a>
//                 <a href="#card">СДЕЛКИ ОНЛАЙН</a>
//                 <a href="#pricing">ТАРИФЫ</a>
//             </nav>
//             <div className="footer_logo">
//                 <div className="row">
//                     <a href='/'>
//                         <img src={logo} alt="logo" className='logo' /></a>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p>© 2022 TradeBlade. All rights reserved</p>
//             </div>



//         </footer>
//     );
// };

// export default Footer;
import React from "react";
import "../../styles/sections/_footer.scss";
import '../../styles/sections/header.scss';
import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <nav className="footer_nav">
                    <a href="#performance" className="footer_nav_link">ЦИФРЫ</a>
                    <a href="#card" className="footer_nav_link">СДЕЛКИ ОНЛАЙН</a>
                    <a href="#pricing" className="footer_nav_link">ТАРИФЫ</a>
                </nav>

            </div>
            <div className="footer_logo">
                <a href="/" className="footer_logo_link">
                    <img src={logo} alt="logo" className="footer_logo_img" />
                </a>
            </div>
            <div className="footer_bottom">
                <p className="footer_bottom_text">© 2022 TradeBlade. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
