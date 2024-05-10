import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import style from './Map.module.css';

const Map = () => {
  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: 'AIzaSyDBz5bp3kALxN3ImD6iktXjZFR89oexaB4', // Reemplaza con tu clave de API de Google Maps
  //     version: 'weekly',
  //   });

  //   let coordenadas = { lat: -31.4155550, lng: -64.1795055 }

  //   loader.load().then(() => {
  //     const mapDiv = document.getElementById('map');
  //     const map = new window.google.maps.Map(mapDiv, {
  //       center: coordenadas,
  //       zoom: 15,
  //     });

  //     // Crear un marcador rojo en las coordenadas dadas
  //     const marker = new window.google.maps.Marker({
  //       position: coordenadas,
  //       map: map,
  //       title: 'Federico Rizzo\nInversiones Inmobiliarias',
  //       icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Icono rojo
  //     });
  //   });
  // }, []);

  return (
    <div className={style.mapDiv}>
        <div id="map" className={style.MapContainer} />       
    </div>
  ) 
  
};

export default Map;