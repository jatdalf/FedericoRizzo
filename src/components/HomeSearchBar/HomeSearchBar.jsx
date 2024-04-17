import style from './HomeSearchBar.module.css'

const HomeSearchBar = () =>{
    return(
      <>
        <div className={style.AlquilerVentaButtons}>            
            <button className={style.filterButtonVentasOn}>Ventas</button>
            <button className={style.filterButtonAlquileresOff}>Alquileres</button>
        </div>
        <div className={style.searchBarContainer}>
            

        </div>
      </>
    )
}

export default HomeSearchBar