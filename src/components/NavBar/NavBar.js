import React from 'react'
import "./NavBar.css";
import logo from "../../assets/img/logo.jpg"
import menu from "../../assets/img/menu.png"
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

function NavBar () {
 return(
  <header className='navBar'>
    
      <Link to='/' className='logoTitle'>
      <img className='logo' src={logo} alt="logo"/>
      <h2 className='titleNavBar'>FUTSAL SHOP</h2>
      </Link>

    <nav className='menu'>
      <input type="checkbox" id='check'/>
      <label for="check" className='checkBoton'>
        <i className='menuIcono'><img src={menu} alt=""/></i>
      </label>

      <ul>
        <Link to='/' className='a'>INICIO</Link>
        <Link to='/category/munich' className='a'>MUNICH</Link>
        <Link to='/category/kelme' className='a'>KELME</Link>
        <Link to='/category/umbro' className='a'>UMBRO</Link>
        <Link to='/category/nike' className='a'>NIKE</Link>
        <Link to='/category/joma' className='a'>JOMA</Link>
        <Link to='/category/adidas' className='a'>ADIDAS</Link>
        <Link to='/cart'><li className='carrito'><a href='/cart'> <CartWidget/> </a></li></Link>
      </ul>
    </nav>
  </header>
 );
}

export default NavBar;




