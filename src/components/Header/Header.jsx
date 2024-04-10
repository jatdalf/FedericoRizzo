import style from "./Header.module.css"
import { HomeFilled , FormOutlined, MailOutlined, ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoSvg from '../../Assets/FrizzoInv.svg'

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
      <Menu className={style.navContainer} onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Link to="/Home"><img className={style.HeaderSvg} src={LogoSvg} /></Link>
      <Menu.Item key="1" style={{ left: "5px" }} >
        <Link to="/Home">Inicio</Link>       
      </Menu.Item>

      <Menu.Item key="2" >
       <Link to="/About">Quienes somos</Link>       
      </Menu.Item>
      
      <Menu.SubMenu key="3" title="Propiedades"  icon= {<HomeFilled />}>
      <Menu.Item key="4"  >
        <Link to="/Temporario">Alquiler Temporario</Link>
        </Menu.Item>        
        <Menu.Item key="5"  >
        <Link to="/Venta">Propiedades a la venta</Link>
        </Menu.Item>
        <Menu.Item key="6"  >
        <Link to="/Alquiler">Propiedades en Alquiler</Link>
        </Menu.Item>                
      </Menu.SubMenu>

      <Menu.Item key="7" icon= {<FormOutlined />} >
        <Link to="/Home#" onClick={() => handleScrollToSection('contactMe')}>Contacto</Link>
      </Menu.Item>
      
      <Menu.Item key="8" icon= {<ShopOutlined />} style={{ right: "5px" }} >
        <Link to="/Contacto">Administracion</Link>
      </Menu.Item>     
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;