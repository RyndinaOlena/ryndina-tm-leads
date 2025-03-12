import { useState } from "react";
import "../../styles/_questions.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const sections = [
    {
        title: "Что такое TradeBlade",
        content: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance."
    },
    {
        title: "Что TradeBlade предлагает инвесторам",
        content: "Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
    },
    {
        title: "Должен ли я перевести свои средства на TradeBlade",
        content: "Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
    },
];

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="content">
            <div className="questions_section">
                <div className="accordion-container">
                    <h2 className="questions_section_title">Часто задаваемые вопросы</h2>
                    {sections.map((section, index) => (
                        <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
                            <button
                                className="accordion-button"
                                onClick={() => toggleAccordion(index)}
                            >
                                {section.title}
                                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            <div className={`questions_section_information ${activeIndex === index ? "show" : ""}`}>
                                <p className="questions_section_information_text">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;
