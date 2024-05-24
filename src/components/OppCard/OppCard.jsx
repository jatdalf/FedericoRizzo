import React from "react";
import style from './OppCard.module.css'
import Heart from "../heart/hearth";
import Mark from "../mark/mark";
import ForRent from "../ForRent/ForRent";
import ForSale from "../ForSale/ForSale";

const OppCard = (props)=>{
    const cardImg = props.images
    let cardPrice = 0;    
    let kind = props.kind
    const forRent = props.rent
    const forSale = props.sell
    
    if (props.rent){
        cardPrice = props.rent_coin + " " + formatearNumero(props.rent_price)    
    }else if (props.sell){
        cardPrice = props.sell_coin + " " + formatearNumero(props.sell_price)
    }else{
        cardPrice = props.temporal_coin + " " + formatearNumero(props.temporal_price)
    }
    if (props.titles===null){ props.titles="" }
    const cardTitles = props.titles
    const cardText = props.titles.slice(0,cardTitles.length)     

    function formatearNumero(numero){
        return new Intl.NumberFormat("es-Ar").format(numero);
    }


    return(
        <div className={style.oppMaincontainter}>
            <div className={style.OppCardContainer}>
                <div className={style.oppCardImgContainer}>
                    <img className={style.oppCard} src={cardImg[0]}></img>
                </div>
                <h1 className={style.oppPrice}>{cardPrice}</h1>
                <span className={style.kind}>{kind}</span>
                <p className={style.oppText1}>
                    {cardTitles[0]}
                </p>
                <p className={style.oppText2}>                    
                    {cardTitles[1]}<br />
                    {cardTitles[2]}
                </p>
                <Heart />
                <Mark />
                <div className={style.rentSaleContainer}>
                    { forSale ? <ForSale /> : <div /> }   
                    { forRent ? <ForRent /> : <div /> }                       
                </div>
            </div>
        </div>
    )
}

export default OppCard;