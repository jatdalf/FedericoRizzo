import style from './HomeSearchBar.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";

const HomeSearchBar = () => {
  
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
            <option value="0">Barrio de Propiedad  &nbsp; &nbsp; &nbsp; &nbsp;</option>             
            <option value="barrio1">Barrio1</option>
            <option value="barrio2">Barrio2</option>
            <option value="barrio3">Barrio3</option>
            <option value="barrio4">Barrio4</option>              
          </select>
        </div>
        <div className={style.categorias}>
          <p>DORMITORIOS</p>
          <select name="dormitorios" id="rooms" className={style.opt}> 
            <option value="0">Número de dormitorios &nbsp; &nbsp; &nbsp; &nbsp;</option>               
            <option value="barrio1">1</option>
            <option value="barrio2">2</option>
            <option value="barrio3">3</option>
            <option value="barrio4">4</option>              
          </select>
        </div>
        <div className={style.categorias}>          
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
