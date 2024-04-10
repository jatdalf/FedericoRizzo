import React from "react";
import style from './Contacto.module.css'

const Contacto = () => {
    return (                         
        <div  id="contactMe" className={style.container}>
           <h1 className={style.contactTitle}>Contactanos por estos medios:</h1>
           <div className={style.contactNode}>
            <img src='https://static.wixstatic.com/media/400291_00335cc27ed84991a820056ff246bd72~mv2.gif' className={style.contactImg}/>
            <p className={style.contactP1}>Por email a la dirección:</p>
            <p className={style.contactP2}>admfederizo@gmail.com</p>
           </div>
           <div className={style.contactNode}>
            <img src='https://static.wixstatic.com/media/400291_0924cd0a4b8c4c6baadcd82c67027bad~mv2.gif' className={style.contactImg}/>
            <p className={style.contactP1}>Chatea con nosotros por whatsApp al:</p>
            <p className={style.contactP2}>351 3415987</p>
           </div>
           <div className={style.contactNode}>
            <img src='https://static.wixstatic.com/media/400291_9d7e9b87406e4892b4404a17fd060a1f~mv2.gif' className={style.contactImg}/>
            <p className={style.contactP1}>Comunicate por teléfono al:</p>
            <p className={style.contactP2}>351 3415987</p>
            <p className={style.contactP3}>Lunes a Viernes de 9:00 a 18:00 <br/>Sábados de 9:00 a 13:00</p>            
           </div>
           <div className={style.contactNode}>
            <img src='https://static.wixstatic.com/media/400291_1d833b5d26ba46efb3c1c3c0eb718a09~mv2.gif' className={style.contactImg}/>
            <p className={style.contactP1}>Visitanos en nuestras oficinas:</p>
            <p className={style.contactP2}>Maipú 151, Oficina 2<br/>Córdoba Capital</p>
           </div>
        </div>        
    )
}

export default Contacto;