import React from "react";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc} from 'firestore/firestore';
import {getStorage} from 'firebase/storage'
import { async } from "@firebase/util";
import style from 'Form.module.css'

const Form = () => {
    let urlImgDesc;
    const saveInfo = async(e)=>{
        e.preventDefault();
        const imgName = e.target.imgName.value;
        const imgDescription = e.target.imgDescroption.value;

        const newImage = {
            imgName,
            imgDescription,
            urlImgDesc,
        }
    }
    
    return (
        <div className={style.formContainer}>
            <h3 className={style.textCenter}>Agregar Imagen Nueva</h3>
            <form onSubmit={saveInfo}>
                <label>Nombre:</label>
                <div className={style.formGroup}>
                    <imput type="text" placeholder='Nombre de la imagen' id='imgName' className={style.formControl} required/>
                </div>
                <label>Descripcion:</label>
                <div className={style.formGroup}>
                    <imput type="text" placeholder='Descripcion de la imagen' id='imgDescription' className={style.formControl} required/>
                </div>
                <label>Agregar imagen</label>
                <imput type='file' id='file' placeholder='Agregar imagen' className={style.formControl} onChange={fileHandler} />
                <button className={style.primaryButton}>Guardar</button>
            </form>
        </div>
    )
}

export default Form;