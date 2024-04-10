import React from "react";
import style from './Whatsapp.module.css';
import wspIcon from '../../Assets/WhatsApp-Logo.wine.svg';

const WhatsApp = () => {
    return (
        <a href='https://api.whatsapp.com/send?phone=5493513415987' target='_blank' rel="noreferrer">
            <div className={style.iconContent}>
                <img className={style.iconwhatsapp} src={wspIcon} alt="WhatsApp Icon" />
            </div>
        </a>
    );
};

export default WhatsApp;