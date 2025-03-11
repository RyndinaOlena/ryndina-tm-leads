import React from 'react'
import CardList from './Card'
import Promotional from './PracticalCard'

//     {
//         title: "NEAR/USDT",
//         subtitle: "SPOT · 1 мин. назад",
//         profit: "ПРИБЫЛЬ",
//         profitValue: "58.6206% ↑",
//         goal: "Цель 4",
//         date: "Дата входа 06.10.2022",
//     },
//     {
//         title: "BTC/USDT",
//         subtitle: "SPOT · 5 мин. назад",
//         profit: "ПРИБЫЛЬ",
//         profitValue: "12.487% ↑",
//         goal: "Цель 2",
//         date: "Дата входа 05.10.2022",
//     },
//     {
//         title: "ETH/USDT",
//         subtitle: "SPOT · 10 мин. назад",
//         profit: "ПРИБЫЛЬ",
//         profitValue: "24.35% ↑",
//         goal: "Цель 3",
//         date: "Дата входа 04.10.2022",
//     },
// ];
const Deals = () => {
    return (
        <div className='dark_container '>
            <h2>Прошедшие сделки</h2>
            <p><span></span>Онлайн</p>
            <div>
                <CardList />
                <Promotional />
            </div>
        </div>
    )
}

export default Deals
