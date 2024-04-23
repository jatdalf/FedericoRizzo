import style from './HomeSearchBar.module.css'

const HomeSearchBar = () => {
  return (
    <>
      <div className={style.AlquilerVentaButtons}>            
        <button className={style.filterButtonVentasOn}>Ventas</button>
        <button className={style.filterButtonAlquileresOff}>Alquileres</button>
      </div>
      <div className={style.searchBarContainer}>
        <div>
          <p>CATEGORÍA</p>
          <label htmlFor="categoria">Tipo de Propiedad</label>
          <select name="categoria" id="categ">              
            <option value="duplex">duplex</option>
            <option value="departamento">departamento</option>
            <option value="casas">casas</option>
            <option value="lotes">lotes</option>              
          </select>
        </div>
        <div>
          <p>BARRIO</p>
          <label htmlFor="barrios">barrio de Propiedad</label>
          <select name="barrios" id="barrio">              
            <option value="barrio1">barrio1</option>
            <option value="barrio2">barrio2</option>
            <option value="barrio3">barrio3</option>
            <option value="barrio4">barrio4</option>              
          </select>
        </div>
        <div>
          <p>DORMITORIOS</p>
          <label htmlFor="dormitorios">Número de dormitorios</label>
          <select name="dormitorios" id="rooms">              
            <option value="barrio1">1</option>
            <option value="barrio2">2</option>
            <option value="barrio3">3</option>
            <option value="barrio4">4</option>              
          </select>
        </div>
      </div>
    </>
  )
}

export default HomeSearchBar
