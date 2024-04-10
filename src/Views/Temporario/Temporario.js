import React from "react";
import style from './Temporario.module.css'
import Header from '../../components/Header/Header.jsx';

const Temporario = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                Aqui se mostraran todos los alquileres temporarios disponibles.
            </div>
        </div>
    )
}

export default Temporario;