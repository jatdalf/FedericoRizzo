import React, { useRef, useState, useEffect } from 'react';
import style from './RentSaleCard.module.css'
import { Link } from 'react-router-dom';
import {TempRentDb, SalesDb, RentDb}  from '../RentSaleDb';

import logo from '../../Assets/1.png'
import condecoracion from '../../Assets/condecoracion.png'
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';

const RentSaleCard = (props)=>{
    const TRDb = TempRentDb
    const SDb = SalesDb
    const RDb = RentDb

    const imgRef = useRef();
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

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
                {/* <Link to="/Temporario"> */}
                <div className={style.tempRentCard}>
                    <div className={style.sliderContainer}>
                        <div className={style.imagesContainer}>
                            {/* <ul ref={imgRef}> */}
                                {TRDb.map((image) => (
                                //<li key={image.id}>
                                <li key={getTempId()}>
                                    <img src={image.image} className={style.imageCss} alt={image.alt} />
                                </li>
                                ))}
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                {/* </Link> */}
                <div className={style.saleCard}>
                    <div className={style.slider2Container}>
                        <div className={style.images2Container}>
                            {/* <ul ref={imgRef}> */}
                                {SDb.map((image2) => (
                                // <li key={image2.id}>
                                <li key={getTempId()}>
                                    <img src={image2.image} className={style.SaleimageCss} alt={image2.alt} />                                
                                </li> 
                                ))}                                                       
                            {/* </ul> */}
                        </div>
                    </div>
                </div>       
                <div className={style.rentCard}>
                    <div className={style.slider3Container}>
                        <div className={style.images3Container}>
                            {/* <ul ref={imgRef}> */}
                                {RDb.map((image3) => (
                                // <li key={image3.id}>
                                <li key={getTempId()}>
                                    <img src={image3.image} className={style.RentImageCss} alt={image3.alt} />
                                </li>
                                ))}
                            {/* </ul>    */}
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