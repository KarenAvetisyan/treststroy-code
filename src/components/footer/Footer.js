import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../../src/logo-white.svg'
import vk__icon from "../../img/icons/vk-icon.svg"
import telegram__icon from "../../img/icons/telegram-icon.svg"
import tube__icon from "../../img/icons/tube-icon.svg"
import Image from '../image/Image'

export default function Footer() {
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
            return <a key={index} className='touch__item' href="#"><i className='oval__icon'><img src={src.icon}  alt=''/></i></a>
        })}
    </div>
  )
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='logo'>
                <Link to='/'><Image img__src={Logo} alt='logo' /></Link>
            </div>
            {renderSocial}
        </div>
    </footer>
  )
}
