import style from './HomeSearchBar.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";
import propiedadesDb from "../sellDb"

const HomeSearchBar = () => {
  //aqui debe fitrar los valores unicos del campo "neighborhood" del array
  const uniqueNeighborhoods = [...new Set(propiedadesDb.map( P => P.neighborhood))];
  
  //aqui debe filtrar los valores unicos del campo "bedrooms" del array
  const dormitorios = [...new Set(propiedadesDb.map( P => P.bedrooms))];
  dormitorios.sort()

  return (
    <>
      <div className={style.AlquilerVentaButtons}>            
        <button className={style.filterButtonVentasOn}>Ventas</button>
        <button className={style.filterButtonAlquileresOff}>Alquileres</button>
      </div>
      <div className={style.searchBarContainer}>
        <div className={style.categorias}>
          <p>CATEGORÍA</p>          
          <select name="categoria" id="categ" className={style.opt}>    
            <option value="0">Tipo de Propiedad   &nbsp; &nbsp; &nbsp; &nbsp;</option>           
            <option value="duplex">duplex</option>
            <option value="departamento">departamento</option>
            <option value="casas">casas</option>
            <option value="lotes">lotes</option>              
          </select>
        </div>
        <div className={style.categorias}>
          <p>BARRIO</p>
          <select name="barrios" id="barrio" className={style.opt}> 
            <option value="all">Barrio de Propiedad  &nbsp; &nbsp; &nbsp; &nbsp;</option> 
            {uniqueNeighborhoods.map (dataBarrio =>{
              return(
                <option value={dataBarrio}>{dataBarrio}</option>
              )
            })}                                
          </select>
        </div>
        <div className={style.categorias}>
          <p>DORMITORIOS</p>
          <select name="dormitorios" id="rooms" className={style.opt}> 
            <option value="0">Número de dormitorios &nbsp; &nbsp; &nbsp; &nbsp;</option>               
            {dormitorios.map (dataDormitorios =>{
              return(
                <option value={dataDormitorios}>{dataDormitorios}</option>
              )
            })}              
          </select>
        </div>
        <div className={style.butttonBuscar}>          
          <button className={style.buscar}>
              <IconContext.Provider value={{ size: '2em' }}>
                <BiSearchAlt2 />
              </IconContext.Provider>
            <span>Buscar</span>            
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeSearchBar
