import { useState } from 'react';
import pricingData from '../../pages/sections/utils.js'
import "../../styles/_promotional.scss";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const PricingCard = ({ type, title, price, discount, features }) => {

    const [duration, setDuration] = useState('12');
    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };
    const calculatePrice = (basePrice) => {
        if (duration === '6') {
            return basePrice * 0.95;
        } else if (duration === '12') {
            return basePrice * 0.9;
        } else {
            return basePrice;
        }
    };
    return (
        <div className={`pricing-card ${type}`}>
            <h2 className="card-title">{title}</h2>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index} className="feature"><FaCheck />{feature}</li>
                ))}
            </ul>
            <div className="price-section">
                <div>
                    <span className="price">${calculatePrice(price).toFixed(2)}</span>
                    <span className="discount">-{discount}%</span>
                </div>
                <select
                    className="duration"
                    value={duration}
                    onChange={handleDurationChange}
                >
                    <option value="6">6 месяцев</option>
                    <option value="12">12 месяцев</option>
                    <option value="24">24 месяца</option>
                </select>
            </div>

            <div className="button">
                ПОПРОБОВАТЬ
                <div className="sub-text">5 дней бесплатно</div>
            </div>
        </div>
    );
};


const Promotional = () => {
    return (
        <div className='content'>
            <div className="pricing-container " id="pricing">
                {pricingData.map((data, index) => (
                    <PricingCard key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default Promotional;
