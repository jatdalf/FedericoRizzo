import React from "react";
import style from './Venta.module.css'
import Header from '../../components/Header/Header.jsx';

const Venta = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                Aqui se muestran las propiedades en venta 
            </div>
        </div>
    )
}

export default Venta;