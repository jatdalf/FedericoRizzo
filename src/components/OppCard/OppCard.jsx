import React from "react";
import style from './OppCard.module.css'


const OppCard = (props)=>{
    const cardImg = props.images
    const cardPrice = props.coin + " " + props.price
    const cardTitles = props.titles
    const cardText = props.titles.slice(0,cardTitles.length)     


    return(
        <div className={style.oppMaincontainter}>
            <div className={style.OppCardContainer}>
                <div className={style.oppCardImgContainer}>
                    <img className={style.oppCard} src={props.images[0]}></img>
                </div>
                <h1 className={style.oppPrice}>{cardPrice}</h1>
                <p className={style.oppText}>
                    {cardTitles[0]}<br />
                    {cardTitles[1]}<br />
                    {cardTitles[2]}
                </p>
            </div>
        </div>
    )
}

export default OppCard;