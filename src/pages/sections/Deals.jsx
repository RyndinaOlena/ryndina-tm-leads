import React from 'react'
import CardList from './Card'
import Promotional from './PracticalCard'
import '../../styles/sections/_deals.scss';
import { MdCircle } from "react-icons/md";
const Deals = () => {
    return (
        <div className='dark_container'>
            <div className='deals'>
                <h2 className='deals_title'>Прошедшие сделки</h2>
                <p className='deals_text'><span className='deals_circle'><MdCircle /></span>Онлайн</p>
            </div>

            <div>
                <CardList />
                <Promotional />
            </div>
        </div>
    )
}

export default Deals
