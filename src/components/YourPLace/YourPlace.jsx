import style from './YourPlace.module.css'
import DeptoImg from '../../Assets/depto.png'

const YourPlace = () =>{
    return(
        <div className={style.tuLugarContainer}>
            <img src={DeptoImg} alt="Sala de estar" className={style.tuLugarImg}/>
            <div className={style.tuLugarSeparadorSuperior} />
            <span className={style.tuLugarTU}>TU</span>
            <br />
            <span className={style.tuLugarLUGAR}>LUGAR</span>
            <div className={style.tuLugarSubrayado}/>
        </div>
    )
}

export default YourPlace;