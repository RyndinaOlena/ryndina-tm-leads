import React from 'react'
import short_img from '../../img/short.svg'
import '../../styles/sections/_hero.scss';
import bg_bottom from '../../img/bg_bottom.png'
const Hero = () => {
    return (
        <div className='dark_container '>
            <div className='hero_block'>
                <div className='shorts'>
                    <img src={short_img} alt='shorts' className='shorts_img' />
                </div>

                <div className='hero_block_text'> <div className='hero_block_promo'>
                    <h2 className='hero_title'>моментально Копируй сделки профи трейдеров</h2>
                    <p className='hero_text'>Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
                </div>
                    <div className="input_wrapper">
                        <input type="email" placeholder="ВАШ E-MAIL" />
                        <button>НАЧАТЬ</button>
                    </div>
                    <div><p className='input_text'>5 дней бесплатного пользования</p></div>
                </div>

            </div>

            <div className='bg_bottom' >
                <img src={bg_bottom} alt='bg_bottom' className='bg_bottom_img' />
            </div>
        </div>
    )
}

export default Hero
