import React from 'react'
import style from './opportunities.module.css'
import ventas from '../../components/sellDb'
import OppCard from '../OppCard/OppCard'

const Opportunities = ()=>{
    const currentCard = ventas.slice(0, 3)

    return(
        <div className={style.opCenter}>
            <h1 className={style.opH1}>OPORTUNIDADES</h1>
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