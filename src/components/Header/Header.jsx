import style from "./Header.module.css"
import { Menu } from 'antd';
import { Children, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GrMailOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";


// import LogoSvg from '../../Assets/FrizzoInv.svg'

const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };



  return (
    < >
      <div className={style.topHeader}/>
      
      <Menu className={style.navContainer} onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {/* <Link to="/Home"><img className={style.HeaderSvg} src={LogoSvg} /></Link> */}
      

      <Menu.Item key="1" style={{ left: "5px" }} >
        <Link to="/Home">Inicio</Link>       
      </Menu.Item>
           
      <Menu.SubMenu key="2" title="Propiedades" >
        <Menu.Item key="3"  >
          <Link to="/Temporario">Alquiler Temporario</Link>
          </Menu.Item>        
          <Menu.Item key="4"  >
          <Link to="/Venta">Propiedades a la venta</Link>
          </Menu.Item>
          <Menu.Item key="5"  >
          <Link to="/Alquiler">Propiedades en Alquiler</Link>
        </Menu.Item>                
      </Menu.SubMenu>

      <Menu.Item key="6" >
        <Link to="/Home#" onClick={() => handleScrollToSection('contactMe')}>Contacto</Link>
      </Menu.Item>
      
      <Menu.Item key="7"  style={{ right: "5px" }} >
        <Link to="/Contacto">Administracion</Link>
      </Menu.Item>     

      <Menu.Item key="8" >
       <Link to="/About">¿Quienes somos?</Link>       
      </Menu.Item>

      
      <Menu.Item key="9" className={style.iconsMail}>
       <Link to="/Home#" onClick={() => handleScrollToSection('contactMe')}><GrMailOption/></Link>       
      </Menu.Item>

      <Menu.Item key="10" className={style.iconsInsta}>
       <Link to="https://www.instagram.com/federicorizzo.ok/" target="_blank"><GrInstagram/></Link>       
      </Menu.Item>

      <Menu.Item key="11" className={style.iconsFace}>
       <Link to="https://www.facebook.com/federicorizzo.ok" target="_blank"><GrFacebookOption/></Link>       
      </Menu.Item>

      <Menu.Item key="12" className={style.icons}>
       <Link to='https://api.whatsapp.com/send?phone=5493513415987' target='_blank' rel="noreferrer"><ImWhatsapp/><div className={style.telNumber}>0351-153415987</div></Link>       
      </Menu.Item>
      
      
     </Menu>
     <Outlet/>
     
     
    </>
   
  )
};
export default Header;