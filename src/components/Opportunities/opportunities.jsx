import React from 'react'
import style from './opportunities.module.css'
import ventas from '../../components/sellDb'
import OppCard from '../OppCard/OppCard'

const Opportunities = ()=>{
    const currentCard = ventas.slice(0, 3)

    return(
        <div className={style.opFondo}>
            <span className={style.opSpan}>Te presentamos las últimas oportunidades en venta y alquiler.</span>
                <div className={style.oppCardContainer}>
                    {currentCard.map(ventas =>{
                        return <OppCard
                            key= {ventas.id}
                            ID= {ventas.id}
                            images= {ventas.images}
                            price= {ventas.price}
                            coin = {ventas.coin}
                            titles= {ventas.titles}
                        />})       
                    }       
                </div>
        </div>
    )
}

export default Opportunities;