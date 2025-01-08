import React, { useRef, useState } from 'react'
import logo from '../../assets/images/logo.svg';
import logo_light from '../../assets/images/logo_light.png';
import './Navbar.css'
// import underline from '../../assets/images/nav_underline.svg'
import underline from '../../assets/images/theme_pattern.png'
import menu_open from '../../assets/images/menu_open.svg'
import menu_close from '../../assets/images/menu_close.svg'

export function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.display = 'flex';
    // menuRef.current.style.right = 0;
    document.querySelector('.nav-mob-close').style.display = 'block'
    document.querySelector('.nav-mob-open').style.display = 'none'
    document.querySelector('.nav-menu-background').style.display = 'block'
  }
  const closeMenu = () => {
    menuRef.current.style.display = 'none';
    document.querySelector('.nav-mob-close').style.display = 'none'
    document.querySelector('.nav-mob-open').style.display = 'block'
    document.querySelector('.nav-menu-background').style.display = 'none'
  }

  const menuHandle = (value) => {
    setMenu(value)
    if(window.innerWidth <= 768){
      setTimeout(() => {
        closeMenu()
      }, 200);
    }
  }

  return (
    <div className='navbar'>
      <img src={logo_light} className='logo' />
      <img onClick={openMenu} src={menu_open} className='nav-mob-open' />
      <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
      <div className='nav-menu-background' onClick={closeMenu}></div>
      <ul ref={menuRef} className='nav-menu'>
        {/* <li>
          <a className='anchor-link' href='#home' >
            <img onClick={() => menuHandle('home')} src={logo_light} style={{ width: '80%'}} />
          </a>
        </li> */}
        {/* <hr style={{ width: '90%', alignSelf: 'center', margin: '15px 0px', opacity: 0.4}}/> */}
        
        <li>
          <a className='anchor-link' href='#home' onClick={() => menuHandle('home')}>
            <p style={{color: menu == 'home' ? 'var(--primary)' : 'white'}} >Home</p>
          {menu == 'home' ? <img className='nav-menu-pointer' src={underline} /> : ''}
          </a>
        </li>
        <li>
          <a className='anchor-link' offset={50} href='#about' onClick={() => menuHandle('about')}>
            <p style={{color: menu == 'about' ? 'var(--primary)' : 'white'}} >About me</p>
          {menu == 'about' ? <img className='nav-menu-pointer' src={underline} /> : ''}
          </a>
        </li>
        <li>
          <a className='anchor-link' offset={50} href='#services' onClick={() => menuHandle('services')}>
            <p style={{color: menu == 'services' ? 'var(--primary)' : 'white'}} >Services</p>
          {menu == 'services' ? <img className='nav-menu-pointer' src={underline} /> : ''}
          </a>
        </li>
        <li>
          <a className='anchor-link' offset={50} href='#portfolio' onClick={() => menuHandle('portfolio')}>
            <p style={{color: menu == 'portfolio' ? 'var(--primary)' : 'white'}} >Portfolio</p>
          {menu == 'portfolio' ? <img className='nav-menu-pointer' src={underline} /> : ''}
          </a>
        </li>
        <li>
          <a className='anchor-link' offset={50} href='#contact' onClick={() => menuHandle('contact')}>
            <p style={{color: menu == 'contact' ? 'var(--primary)' : 'white'}} >Contact</p>
          {menu == 'contact' ? <img className='nav-menu-pointer' src={underline} /> : ''}
          </a>
        </li>
      </ul>
      <div className='nav-connect'>Contact me</div>
    </div>
  )
}