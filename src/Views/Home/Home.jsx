import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import Carrousel from "../../components/Carrousel/Carrousel";
import celphone from '../../Assets/celphone.png';
import HomeBoceto from '../../Assets/HomeBoceto.png';
import MisionVisionValor from "../../components/MisionVisionValor/MisionVisionValor";
import oportunidades from '../../Assets/oportunidades.png';
import WhatsApp from "../../components/Whatsapp/Whatsapp";
import Footer from "../../components/Footer/Footer";
import Contacto from "../Contacto/Contacto";
import Opportunities from "../../components/Opportunities/opportunities";
import CpiBanner from "../../components/CpiBanner/CpiBanner";
import Map from "../../components/Map/Map";
import RentSaleCard from "../../components/RentSaleCard/RentSaleCard";

const Home = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <div className={style.home}>
                    <RentSaleCard />
                    <MisionVisionValor />    
                    <Contacto />      
                    <Opportunities />
                    <Map />
                    <CpiBanner />
                    <Footer />
                    <WhatsApp />            
                </div>                
            </div>
        </div>
    )
}

export default Home;