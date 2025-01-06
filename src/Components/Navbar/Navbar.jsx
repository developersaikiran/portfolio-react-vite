import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  
  const openMenu = () => {
    menuRef.current.style.right = 0;
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'>
      <img src={logo} />
      <img onClick={openMenu} src={menu_open} className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
        <li><a className='anchor-link' href='#home' ><p onClick={()=> setMenu('home')}>Home</p></a>{menu == 'home' ? <img src={underline} /> : ''}</li>
        <li><a className='anchor-link' offset={50} href='#about' ><p onClick={()=> setMenu('about')}>About me</p></a>{menu == 'about' ? <img src={underline} /> : ''}</li>
        <li><a className='anchor-link' offset={50} href='#services' ><p onClick={()=> setMenu('services')}>Services</p></a>{menu == 'services' ? <img src={underline} /> : ''}</li>
        <li><a className='anchor-link' offset={50} href='#portfolio' ><p onClick={()=> setMenu('portfolio')}>Portfolio</p></a>{menu == 'portfolio' ? <img src={underline} /> : ''}</li>
        <li><a className='anchor-link' offset={50} href='#contact' ><p onClick={()=> setMenu('contact')}>Contact</p></a>{menu == 'contact' ? <img src={underline} /> : ''}</li>
      </ul>
      <div className='nav-connect'>Contact me</div>
    </div>
  )
}