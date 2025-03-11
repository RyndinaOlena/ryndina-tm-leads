import pricingData from '../../pages/sections/utils.js'
import "../../styles/sections/_promotional.scss";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const PricingCard = ({ type, title, price, discount, features }) => {
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
                    <span className="price">${price}</span>
                    <span className="discount">-{discount}%</span>
                </div>
                <div>
                    <button className="duration">12 месяцев <IoIosArrowDown className="arrow" /></button>
                </div>

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
        <div className="pricing-container" id="pricing">
            {pricingData.map((data, index) => (
                <PricingCard key={index} {...data} />
            ))}
        </div>
    );
};

export default Promotional;
