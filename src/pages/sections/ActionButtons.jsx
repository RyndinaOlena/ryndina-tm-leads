import React from "react";
import "../../styles/sections/header.scss";

const ActionButtons = () => {
    return (
        <div className="action_block">
            <button className="login_btn">Вход</button>
            <button className="login_btn">Регистрация</button>
        </div>
    );
};

export default ActionButtons;
