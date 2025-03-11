import React from "react";
import "../../styles/sections/_card.scss";

const cardsData = [
    {
        title: "NEAR/USDT",
        subtitle: "SPOT · 1 мин. назад",
        profit: "ПРИБЫЛЬ",
        profitValue: "58.6206% ↑",
        goal: "Цель 4",
        date: "Дата входа 06.10.2022",
    },
    {
        title: "BTC/USDT",
        subtitle: "SPOT · 1 мин. назад",
        profit: "ПРИБЫЛЬ",
        profitValue: "6.02% ↑",
        goal: "Цель 2",
        date: "Дата входа 06.10.2022",
    },
    {
        title: "ETH/USDT",
        subtitle: "SPOT · 1 мин. назад",
        profit: "ПРИБЫЛЬ",
        profitValue: "24.35% ↑",
        goal: "Цель 3",
        date: "Дата входа 06.10.2022",
    },
    {
        title: "NEAR/USDT",
        subtitle: "SPOT · 1 мин. назад",
        profit: "ПРИБЫЛЬ",
        profitValue: "58.6206% ↑",
        goal: "Цель 3",
        date: "Дата входа 06.10.2022",
    },
    {
        title: "ETH/USDT",
        subtitle: "SPOT · 1 мин. назад",
        profit: "ПРИБЫЛЬ",
        profitValue: "0.963%↑",
        goal: "Цель 3",
        date: "Дата входа 06.10.2022",
    },
];

const Card = ({ title, subtitle, profit, profitValue, goal, date }) => {
    return (
        <div className="card">

            <div>
                <h2 className="card-title">{title}</h2>
                <p className="card-subtitle">{subtitle}</p>
            </div>
            <div>
                <p className="card-profit">{profit}</p>
                <p className="card-profit-value">{profitValue}</p>

            </div>
            <p className="card-goal">{goal}</p>
            <p className="card-date">{date}</p>
            <p className="card-corner"></p>
        </div>
    );
};

const CardList = () => {
    return (
        <div className="card-list" id="performance">
            <div className="card-container">

                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
