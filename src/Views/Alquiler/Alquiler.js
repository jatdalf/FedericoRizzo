import React from "react";
import style from './Alquiler.module.css'
import Header from '../../components/Header/Header.jsx';

const Alquiler = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                Aqui se mostraran todos los alquileres disponibles.
            </div>
        </div>
    )
}

export default Alquiler;