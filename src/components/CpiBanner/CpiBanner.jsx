import React from 'react'
import style from './CpiBanner.module.css'
import cpiSvg from '../../Assets/CPI.svg'

const CpiBanner = () => {
    return(
        <div className={style.cpiContainer}>
            <img src={cpiSvg} className={style.cpiImg}/>
            <div className={style.cpiTitleContainer}>
                <p className={style.cpiTitle}>COLEGIO<br/>PROFESIONAL DE<br/>INMOBILIARIOS</p>
            </div>
            <div className={style.cpiMpContainer}>
                <p className={style.cpiMp} >M.P.: 6918</p>
            </div>
        </div>
    )
}

export default CpiBanner