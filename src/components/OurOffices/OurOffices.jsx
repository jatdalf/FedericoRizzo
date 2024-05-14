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
                <button className={style.OurOfButton}>Ver en Mapa</button>
            </div>
            <div>
                <img className={style.OurOfficefrizzoLogo} src={FrizzoLogo} alt='logo Federico Rizzo inversiones' />
                <span className={style.OurOfNtrasOff}>NUESTRAS</span>
                <br />
                <span className={style.OurOfNtrasOff2}>OFICINAS</span>
                <div className={style.OurOffHorarios}>HORARIOS DE ATENCIÓN</div>
                <div className={style.OurOffHorarios2}>
                    <span>Administración</span>
                    <br />
                    <span>08:00 a 18:00 horas</span>
                    <br />                    
                    <br />
                    <span>Comercial</span>
                    <br />
                    <span>09:00 a 16:00 horas</span>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default OurOffices