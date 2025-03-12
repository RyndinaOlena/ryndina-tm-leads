import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/_header.scss';
import logo from '../../img/logo.svg'
import button from '../../img/btn.svg'
import Modal from './modal';
import ActionButtons from './ActionButtons';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true)
    };
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <header className='dark_container'>
            <div className='section'>
                <div className="row">
                    <a href='/'>
                        <img src={logo} alt="logo" className='logo' /></a>
                </div>
                <div>
                    <nav className="nav">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <Link to="/" className="nav_item">Цифры</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">Сделки онлайн</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">о компании</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">как начать</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">тарифы</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">отзывы</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/" className="nav_item">FAQ</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className="desktop_buttons">
                    <ActionButtons />
                </div>

                <div className='nav_menu'>
                    <button className="btn" onClick={handleOpen}><img src={button} alt="btn"></img></button>
                    {isOpen && <Modal closeModal={closeModal} />}
                </div>
            </div>
        </header>
    );
}

export default Header;
