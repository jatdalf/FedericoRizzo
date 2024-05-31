import { Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import style from './RentSaleCard.module.css'
import {TempRentDb, SalesDb, RentDb}  from '../RentSaleDb';
import logo from '../../Assets/1.png'
import condecoracion from '../../Assets/condecoracion.png'
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';

const RentSaleCard = (props)=>{
    const TRDb = TempRentDb
    const SDb = SalesDb
    const RDb = RentDb

    const randomizador = (min, max)=>{              
        let resultado = Math.round(Math.random() * (max - min)) //+ min   
        return resultado
    }
    
    const PrimerNumero = randomizador(0, TRDb.length -1)
    console.log(`primer numero ${PrimerNumero}`)

    const SegundoNumero = randomizador(0, SDb.length -1)
    console.log(`Segundo numero ${SegundoNumero}`)

    const TercerNumero = randomizador(0, RDb.length -1)
    console.log(`tercer numero ${TercerNumero}`)


    let tempId = 100
    const getTempId = ()=>{
        tempId++
        return tempId
    }
        
        
   

    // useEffect(() => {
    //     const listNode = imgRef.current;
    //     const imageNode = listNode.querySelectorAll('li > img')[currentImgIndex];

    //     if (imageNode) {
    //       imageNode.scrollIntoView({
    //         behavior: 'smooth',
    //       });
    //     }      
    //   }, [currentImgIndex]);  
    
    //   // Función para avanzar automáticamente las imágenes cada 5 segundos
    //   useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       // Calcular el próximo índice de imagen
    //       const nextIndex = (currentImgIndex + 1) % TRDb.length;
    //       setCurrentImgIndex(nextIndex)
    //     }, 5000); // Intervalo de 5000 milisegundos (5 segundos)    
    //     return () => {
    //       // Limpiar el intervalo cuando el componente se desmonte
    //       clearInterval(intervalId);
    //     };
    //   }, [currentImgIndex]);

    return(
        <>
        <div className={style.fondo}>
            <div className={style.RentSaleCardContainer}>
       
                <div className={style.tempRentCard}>
                    <div className={style.sliderContainer}>
                        <div className={style.imagesContainer}>                        
                            <li key={getTempId()}>
                                <img src={TRDb[PrimerNumero].image} className={style.imageCss} alt={TRDb[PrimerNumero].alt} />
                            </li>
                        </div>
                    </div>
                </div>
           
                <div className={style.saleCard}>
                    <div className={style.slider2Container}>
                        <div className={style.images2Container}> 
                            <li key={getTempId()}>
                                <img src={SDb[SegundoNumero].image} className={style.SaleimageCss} alt={SDb[SegundoNumero].alt} />                                
                            </li> 
                        </div>
                    </div>
                </div>       

                <div className={style.rentCard}>
                    <div className={style.slider3Container}>
                        <div className={style.images3Container}>
                            <li key={getTempId()}>
                                <img src={RDb[TercerNumero].image} className={style.RentImageCss} alt={RDb[TercerNumero].alt} />
                            </li>             
                        </div>
                    </div>
                </div>            
            </div>
            <div className={style.bottom}>
                <p className={style.oportunidades}>OPORTUNIDADES</p>
                <p className={style.exclusivas}>EXCLUSIVAS</p>
                <p className={style.condecoracion}><img src={condecoracion} className={style.condecoracionImg} alt="medalla" /></p>
            </div>     
        
            <HomeSearchBar />
        
            <div className={style.logoImg}>
                <img src={logo} className={style.logoImg} alt="Logo Inmobiliaria"/>
            </div>
        </div>
    </>
)}

export default RentSaleCard;