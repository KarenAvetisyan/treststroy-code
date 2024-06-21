import React from 'react'
import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from "../../logo.svg"
import vk__icon from "../../img/icons/vk-icon.svg"
import telegram__icon from "../../img/icons/telegram-icon.svg"
import tube__icon from "../../img/icons/tube-icon.svg"
import tel__icon from "../../img/icons/tel-icon.svg"
import mail__icon from "../../img/icons/mail-icon.svg"
import burger__icon from "../../img/icons/burger-icon.svg"
import Image from '../image/Image'

export default function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  // logo 
  const renderLogo = (
    <div className='logo'>
        <Link to='/' ><Image img__src={logo} alt="logo" /></Link>
    </div>
  )
  // social array
  const social__array = [
    {icon: vk__icon, href: '', href__type: ''},
    {icon: telegram__icon, href: '', href__type: ''},
    {icon: tube__icon, href: '', href__type: ''}
  ]
  const renderSocial = (
    <div className='w-h social'>
        <span className='social__text'>Мы в соцсетях</span> 
        {social__array.map((src, index)=>{
            return <a key={index} className='touch__item' href="#"><i className='oval__icon'><Image img__src={src.icon} /></i></a>
        })}
    </div>
  )
  // contact array 
  const contact__array = [
    {icon: tel__icon, contact__text: "+7 (495) 147-37-77", link: "+74951473777", link__type: 'tel:'},
    {icon: mail__icon, contact__text: "nfo@treststroy.org", link: "nfo@treststroy.org", link__type: 'mailto:'},
  ]
  const renderContact = (
    <div className='w-h contact'>
        {contact__array.map((src, index)=>{
            return (<a key={index} className='touch__item' href={src.link__type+src.href}><i className='oval__icon'><Image img__src={src.icon} /></i><span>{src.contact__text}</span></a>)
        })}
    </div>
  )
  // navbar 
  const renderNavbar = (
      <nav className={`nav__bar ${toggleNavbar ? 'open' : ''}`}>   
            <span onClick={()=>setToggleNavbar(false)} className='d-max-lg-only nav__bar-close'><i className='icon icon-close'></i></span>                          
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/'}>ГЛАВНАЯ</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/advantages'}>НАШИ ПРЕИМУЩЕСТВА</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/offer'}>МЫ ПРЕДЛАГАЕМ</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/about'}>О НАС</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/projects'}>ПРОЕКТЫ</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/news'}>НОВОСТИ</NavLink> 
            <NavLink onClick={()=>setToggleNavbar(false)} to={'/contact'}>КОНТАКТЫ</NavLink> 
      </nav>  
  )

  return (
    <header className="header">
        <div className='container'>
          <div className='header__top'>
              <div className='header__top-wrap'>
                  {renderSocial}
                  {renderContact}
              </div>
          </div>
          <div className='header__bottom'>
            {renderLogo}
            {renderNavbar}
            <span className='burger__btn d-max-lg-only' onClick={()=>setToggleNavbar(!toggleNavbar)}><Image img__src={burger__icon} /></span>
          </div>
        </div>
    </header>
  )
}
