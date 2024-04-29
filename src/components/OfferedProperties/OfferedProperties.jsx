import style from './OfferedProperties.module.css'
import casas from '../../Assets/casas.jpeg'
import deptos from '../../Assets/depto.png'

const OfferedProperties = () =>{
    return(
        <div className={style.mainContainer}>
            <span className={style.propiedades}>
                PROPIEDADES
            </span>
            <span className={style.ofrecidas}>
                OFRECIDAS
            </span>
            <div className={style.OferedCardContainer}>
                <div className={style.duplex}>
                    <img src='https://federicorizzo.com.ar/wp-content/uploads/2023/11/Frente-277.jpg' alt="casa duplex"/>                    
                    <span className={style.title}>DUPLEX</span>
                    <button className={style.verMas}>VER MÁS</button>
                </div>
                
                <div className={style.departamentos}>
                    <img src='https://federicorizzo.com.ar/wp-content/uploads/2023/11/Frente-898.jpg' alt="departamentos" />
                        <span className={style.title}>DEPARTAMENTOS</span>
                        <button className={style.verMas}>VER MÁS</button>                    
                </div>
                <div className={style.casas}>
                    <img src={casas} alt="casas" />
                    <span className={style.title}>CASAS</span>
                    <button className={style.verMas}>VER MÁS</button>
                </div>
                <div className={style.inversiones}>
                    <img src={deptos} alt="inversiones" />
                    <span className={style.title}>INVERSIONES</span>
                    <button className={style.verMas}>VER MÁS</button>
                </div>
            </div>

        </div>
    )
}

export default OfferedProperties