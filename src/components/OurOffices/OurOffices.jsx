import FrizzoLogo from '../../Assets/1.png'
import style from './OurOffices.module.css'


const OurOffices = () =>{
    return(
        <div className={style.ourOfficesContainer}>
            <div>
                <span className={style.OurOffadress}>Avda. Maipú 151 Oficina 2, Córdoba Capital</span>
            </div>
            <div>
                <img className={style.OurOfficefrizzoLogo} src={FrizzoLogo} alt='logo Federico Rizzo inversiones' />
                <span className={style.OurOfNtrasOff}>NUESTRAS</span>
                <span className={style.OurOfNtrasOff}>OFICINAS</span>
            </div>
        </div>
    )
}

export default OurOffices