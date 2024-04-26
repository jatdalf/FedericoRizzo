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
                            kind = {ventas.kind}                          
                            rent = {ventas.rent}
                            sell = {ventas.sell}
                            temporal = {ventas.temporal}
                            rent_price = {ventas.rent_price}
                            sell_price = {ventas.sell_price}
                            temporal_price = {ventas.temporal_price}
                            rent_coin = {ventas.rent_coin}
                            sell_coin = {ventas.sell_coin}
                            temporal_coin = {ventas.temporal_coin}
                            titles= {ventas.titles}
                        />})       
                    }       
                </div>
        </div>
    )
}

export default Opportunities;