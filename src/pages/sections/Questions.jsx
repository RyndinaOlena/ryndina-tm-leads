import React, { useState } from 'react'
import "../../styles/sections/_questions.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Questions = () => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const toggleInfoVisibility = () => {
        setIsInfoVisible(prevState => !prevState);
    };
    return (
        <div className='questions_section'>
            <h2 className='questions_section_title'>
                часто задаваемые вопросы
            </h2>

            <div className={`questions_section_information ${isInfoVisible ? 'show' : ''}`}>
                <h3 className='questions_section_information_title'>Что такое TradeBlade <IoIosArrowDown />
                </h3>
                <p className='questions_section_information_text'> Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                <br />
                <p className='questions_section_information_text'>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>
            </div>
            <div className='questions_list_block'>
                <button className='questions_list_block_alert'
                    onClick={toggleInfoVisibility} >Что TradeBlade предлагает инвесторам <IoIosArrowUp /></button>
                <button className='questions_list_block_alert'
                    onClick={toggleInfoVisibility} >Должен ли я перевести свои средства на TradeBlade  <IoIosArrowUp /></button>
            </div>
        </div>
    )
}

export default Questions
