import style from './QueresVender.module.css'
import handShake from '../../Assets/handShake.png'
import sumando from '../../Assets/Sumando.png'
import firmaDigital from '../../Assets/FirmaDigital.png'
import tokko from '../../Assets/Tokko.png'

const QueresVender = ()=>{
//    addEventListener('DOMContentLoaded', ()=>{
//     const contadores = document.querySelectorAll('.counter')
//     const velocidad = 1000
//    })

//    const animarContadores = ()=>{
//     for (const contador of contadores){
//         const ActualizarContador = () =>{
//             let cantidadMaxima = 0
//         }
//     }
//    }


    return (
        <div className={style.QueresVenderContainer}>
            <span className={style.SpQueres}>¿QUERÉS</span>
            <span className={style.SpVender}>VENDER O</span>
            <span className={style.SpAlquilar}>ALQUILAR</span>
            <span className={style.SpPropiedad}>TU PROPIEDAD?</span>
            <img src={handShake} alt='apretón de manos'></img>
            <button>Contactanos</button> 
            <div className={style.QvSeparador}/>    
            <div className={style.seccionSumando}> 
                <span className={style.SpSobre}>SOBRE</span>   
                <span className={style.SpNosotros}>NOSOTROS</span>   
                <img className={style.SpSumandoImg} src={sumando} alt="sumando"/>
                <div className={style.bannerSumador}>
                    <div className={style.NumerosSumadores}>
                        <span class='counter' data cantTotal='80'>+80</span>
                        <div className={style.verticalLine1}/>
                        <span className={style.segundoSumador} data cantTotal='350'>+350</span>
                        <span className={style.tercerSumador} data cantTotal='100'>+100</span>
                    </div>
                    <hr className={style.sumadorHr1}/>
                    <hr className={style.sumadorHr2}/>
                    <div className={style.frasesDeSumadores}>
                        <span>Propiedades</span>                        
                        <span className={style.sumadorSp2}>Propiedades</span>                       
                        <span className={style.sumadorSp3}>Propiedades</span>
                        <br />
                        <span className={style.sumadorSp1b}>Vendidas</span>
                        <span className={style.sumadorSp2b}>Alquiladas</span>
                        <span className={style.sumadorSp3b}>en Administración</span>
                    </div>
                </div>  
                <img className={style.SpfirmaDigitalImg} src={firmaDigital} alt="Firma Digital"/>
                    <span className={style.SpfirmaDigitalText1}>Somos unas de las pocas inmobiliarias con firma</span>                        
                    <span className={style.SpfirmaDigitalText2}>digital en el interior del país.</span>
                    
                <img className={style.SpTokkoImg} src={tokko} alt="Tokko"/>
                <div className={style.tokkoContainer}>
                    <div className={style.spTokkoDiv1}/>
                    <div className={style.spTokkoDiv2}/>
                    <span className={style.spTokkoSpan}>Además trabajamos con el CRM Tokko</span>
                </div>
            </div>
        </div>
    )
}

export default QueresVender