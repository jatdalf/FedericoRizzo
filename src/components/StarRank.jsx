import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import styles from "./StarRank.module.css"

const StarRank = (props)=>{
  const score = props.rate

  return(
    <div className={styles.stars}>
      {
        [...new Array(5)].map((star, index)=>{return index < score ? <BsStarFill key={index} className={styles.individualStar}/> : <BsStar key={index} className={styles.individualStar}/>})
      }
    </div>
  )
}

export default StarRank;