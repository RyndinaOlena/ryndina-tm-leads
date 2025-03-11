import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sections/header.scss'
import { IoCloseSharp } from "react-icons/io5";
import ActionButtons from './ActionButtons';
const Modal = (props) => {
    const { closeModal } = props;
    return (
        <div className='overlay'>
            <button onClick={closeModal} className='btn_close_modal'><IoCloseSharp /></button>
            <div className='modal'>
                <nav className='link_modal_lists'>
                    <Link className='link_modal' onClick={closeModal} to='/' exact='true' >Цифры</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>Сделки онлайн</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>о компании</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>как начать</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>тарифы</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>отзывы</Link>
                    <Link className='link_modal' onClick={closeModal} to='/'>FAQ</Link>
                </nav>
                <ActionButtons />
            </div>
        </div >
    )
}

export default Modal
