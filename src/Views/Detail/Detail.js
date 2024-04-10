import React from "react";
import style from './Detail.module.css'
import Header from '../../components/Header/Header.jsx';

const Detail = () => {
    return (
        <div>
            <Header/>
            <div className={style.container}>
                este es el detalle mostrado al hacer click
            </div>
        </div>
    )
}

export default Detail;