import React from "react";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc} from 'firestore/firestore';
import {getStorage} from 'firebase/storage'
import { async } from "@firebase/util";
import style from 'List.module.css'

const List = () => {
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
            <form>
                <label>Descripcion:</label>
                <div className={style.formGroup}>

                </div>
            </form>
        </div>
    )
}

export default List;