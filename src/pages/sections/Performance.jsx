import React from 'react'
import '../../styles/sections/_performance.scss';
const Performance = () => {
    return (
        <div className='performance_section' id="performance">
            <div>
                <h3 className='performance_section_title'>Цифры</h3>
                <p className='performance_section_date' >Cентябрь <br />2022</p>
            </div>
            <div>
                <h4 className='performance_section_text'>фьючерсных<br />
                    и спотовых сделок</h4>
                <p className='performance_section_amount'>67</p>
            </div>
            <div>
                <h4 className='performance_section_text'>Торговой<br /> прибыли</h4>
                <p className='performance_section_amount'>2756%</p>
            </div>

            <div>
                <h4 className='performance_section_text'>прибыль<br />
                    подписчиков</h4>
                <p className='performance_section_amount'>375000</p>
            </div>
        </div>
    )
}

export default Performance
