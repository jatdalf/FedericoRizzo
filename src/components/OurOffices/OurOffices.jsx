import FrizzoLogo from '../../Assets/1.png'
import style from './OurOffices.module.css'
import location from '../../Assets/Location.png'
import Map from '../Map/Map'


const OurOffices = () =>{
    return(
        <div className={style.ourOfficesContainer}>
            <div>
                <Map />
                <img className={style.OurOffLocation} src={location} alt="Location Pin icon"/>
                <span className={style.OurOffadress}>Avda. Maipú 151 Oficina 2, Córdoba Capital</span>
            </div>
            <div>
                <img className={style.OurOfficefrizzoLogo} src={FrizzoLogo} alt='logo Federico Rizzo inversiones' />
                <span className={style.OurOfNtrasOff}>NUESTRAS</span>
                <br />
                <span className={style.OurOfNtrasOff2}>OFICINAS</span>
                <div className={style.OurOffHorarios}>HORARIOS DE ATENCIÓN</div>
            </div>
        </div>
    )
}

export default OurOffices