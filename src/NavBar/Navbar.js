import react from 'react';
import {  NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';
import './Navbar.css'
const Navbar =()=>{

    const menuList = MenuList.map(({url,title},index)=>{
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">{title}</NavLink>
            </li>
        )
    })
    return(
       <nav>
           <div className="logo">
                FAKE<font>SHOP</font>
           </div>
           <div class="menu-icon">
               <i class="fa fa-bars"></i>
           </div>
           <ul className="menu-list">{menuList}</ul>
       </nav>

    )
}
export default Navbar;