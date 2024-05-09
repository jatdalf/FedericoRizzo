import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import Carrousel from "../../components/Carrousel/Carrousel";
import MisionVisionValor from "../../components/MisionVisionValor/MisionVisionValor";
import WhatsApp from "../../components/Whatsapp/Whatsapp";
import Footer from "../../components/Footer/Footer";
import Contacto from "../Contacto/Contacto";
import Opportunities from "../../components/Opportunities/opportunities";
import CpiBanner from "../../components/CpiBanner/CpiBanner";
import Map from "../../components/Map/Map";
import RentSaleCard from "../../components/RentSaleCard/RentSaleCard";
import OfferedProperties from "../../components/OfferedProperties/OfferedProperties";
import QueresVender from "../../components/QueresVender/QueresVender";
import YourPlace from "../../components/YourPLace/YourPlace";
import Comments from "../../components/Comments/Comments";
import OurOffices from "../../components/OurOffices/OurOffices";


const Home = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <div className={style.home}>
                    <RentSaleCard />
                    <Opportunities />
                    <OfferedProperties />
                    <QueresVender />    
                    <YourPlace />                          
                    <Comments />
                    <OurOffices />                    
                    <Footer />
                    <WhatsApp />            
                </div>                
            </div>
        </div>
    )
}

export default Home;