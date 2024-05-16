import React from "react";
import style from './Footer.module.css';
import FedeRizzoLogo from '../../Assets/1.png'
import CPIblack from '../../Assets/CPIblack.png'
import CaCicBlack from '../../Assets/CacicBlack.png'


const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.footer}>    

            <div className={style.footerFirstCol}>
                <img src={FedeRizzoLogo} className={style.FooterRizzoLogo} alt="Logo Federico Rizzo"/>
                <span>M.P.: 6918</span>
                <img src={CPIblack} className={style.FooterCpiBlack} alt="Logo Consejo Prof Inmobiliarios"/>
                <img src={CaCicBlack} className={style.FooterCaCICLogo} alt="Logo CaCIC"/>
            </div>            
            
            <div className={style.footerSecondCol}>
                <span></span>
            </div> 

            <div className={style.footerThirdCol}>
            </div> 

            <div className={style.footerFourthCol}>
            </div> 

            </div>
        </div>
    );
};

export default Footer;
