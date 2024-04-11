import React from 'react'
import CardsMvv from '../CardsMvv/CardsMvv'
import style from './MisionVisionValor.module.css'
import temporalImage from '../../Assets/rizzoImg1.png'


const MisionVisionValor = ()=>{
    const cardData=[{
        id: 1,
        name: 'MISION',
        cardImage: 'https://static.wixstatic.com/media/400291_f7827ace34e74f9d964a3d2f72139dc2~mv2.gif',
        cardText: ['Gestionamos y llevamos adelante operaciones inmobiliarias en Córdoba, acercando las mejores opciones de Venta, Alquiler y Administración de Propiedades.','Desde hace más de 10 años, realizamos un registro de la propiedad de manera integral para asesorar al cliente, teniendo en cuenta las políticas y leyes provinciales y nacionales.','Trabajamos en conjunto con las partes involucradas y nos capacitamos continuamente para lograr la mejor atención al cliente. Velando por sus intereses.'],
    },{
        id: 2,
        name: 'VISION',
        cardImage: 'https://static.wixstatic.com/media/400291_7d4ca278b8ac40e4ba9c61b5d0bd8cae~mv2.gif',
        cardText: ['Ser una empresa bien posicionada en el rubro inmobiliario.','Estar a la vanguardia de las nuevas tecnologías aplicadas al sector inmobiliario.','Tenemos una política sustentable y colaboramos activamente para preservar el medio ambiente.'],
    },{
        id: 3,
        name: 'VALORES',
        cardImage: 'https://static.wixstatic.com/media/400291_3c706abf2563477d822fa8df80e0257c~mv2.gif',
        cardText: ['Honestidad','Integridad','Confiabilidad','Compromiso','Respeto','Innovación','Pasión',
        'Trabajo en equipo','Responsabilidad social corporativa','Cuidado del Medioambiente','Vocación de servicio',
        'Empatía','Cortesía','Espíritu de superación'],
    }]

    const currentCard = cardData.slice(0, 3)

    return(
        <div className={style.cardMvvContainer}>
             {currentCard.map(cardData =>{
                return <CardsMvv
                    key= {cardData.id}
                    ID= {cardData.id}
                    name= {cardData.name}
                    cardImage= {cardData.cardImage}                     
                    cardText = {cardData.cardText}            
                />})       
                }      
                <img className={style.TemporalImage} src={temporalImage} /> 
        </div>
        
    )
}

export default MisionVisionValor;