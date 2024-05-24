import React from "react";
import style from './Footer.module.css';
import FedeRizzoLogo from '../../Assets/1.png'
import CPIblack from '../../Assets/CPIblack.png'
import CaCicBlack from '../../Assets/CacicBlack.png'
import locationWhite from '../../Assets/LocationWhite.png'
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
      <>
        <div className={style.footerContainer}>
            <div className={style.footer}>    

                <div className={style.footerFirstCol}>
                    <img src={FedeRizzoLogo} className={style.FooterRizzoLogo} alt="Logo Federico Rizzo"/>
                    <span className={style.footerMP}>M.P.: 6918</span>
                    <img src={CPIblack} className={style.FooterCpiBlack} alt="Logo Consejo Prof Inmobiliarios"/>
                    <img src={CaCicBlack} className={style.FooterCaCICLogo} alt="Logo CaCIC"/>
                </div>            
            
                <div className={style.footerSecondCol}>
                    <span className={style.footerNosotros}>
                        <h3>Nosotros</h3>
                        ESPECIALIZADOS EN VENTA,
                        ALQUILER Y ADMINISTRACIÓN
                        Con una corta trayectoria pero
                        con un alto nivel de satisfacción
                        de nuestros clientes, nos
                        caracterizamos por una atención
                        personalizada y una amplia
                        variedad de oportunidades de
                        alquiler y venta.
                    </span>
                </div> 

                <div className={style.footerThirdCol}>
                    <h3>Contacto</h3>
                    <span>
                        <img src={locationWhite} className={style.footerLocationIcon} alt="Location icon"/>
                        Avda. Maipú 151 Oficina 2
                    </span>
                    <br/>
                    <span>
                        <FaWhatsapp />
                        0351 - 153415987
                    </span>
                    <br />
                    <span>
                        <CiMail />
                        admfederizo@gmail.com
                    </span>
                    <br />
                    <span>
                        <FaInstagram />
                        /federicorizzo.ok
                    </span>
                    <br />
                    <span>
                        <FaFacebookF />
                        /federicorizzo.ok
                    </span>

                </div> 

                <div className={style.footerFourthCol}>
                    <h3>Propiedades</h3>
                    <span>Departamentos (10)</span>
                    <br />
                    <span>Casas (5)</span>
                    <br />
                    <span>Lotes (10)</span>
                    <br />
                    <span>Alquiler (20)</span>
                    <br />
                    <span>Venta (15)</span>
                </div> 

            </div>

            <div className={style.footer2}>

            </div>
        </div>
      </>
    );
};

export default Footer;
