import React from "react";
import style from './About.module.css'
import Header from '../../components/Header/Header.jsx';

const About = () => {
    return (
        <div>
            <Header/>
            <div className={style.container}>
                Aqui debe ir el modulo Acerca de...
            </div>
        </div>
    )
}

export default About;