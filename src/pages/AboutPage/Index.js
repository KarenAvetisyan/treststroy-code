import React from 'react'
import { useState } from 'react'
import './aboutPage.css'
import background from "../../img/advantages-bg.webp"
import PageBg from "../../components/pageBg/PageBg"
import Button from '../../components/button/Button'
import img__iso from "../../img/iso.webp"
import img__cert_1 from "../../img/cert_1.webp"
import img__cert_2 from "../../img/cert_2.webp"
import img__cert_3 from "../../img/cert_3.webp"
import img__cert_4 from "../../img/cert_4.webp"
import img__cert_5 from "../../img/cert_5.webp"
import img__cert_6 from "../../img/cert_6.webp"
import Image from '../../components/image/Image'

export default function AboutPage() {
  const [showImage, setShowImage] = useState();
  const [closeImage, setCloseImage] = useState(false)
  // title 
  const _h1 = <>О НАС</>;

  // subtitle 
  const renderSubtitle = (
    <p className='subtitle'>
        ООО «ТРЕСТСТРОЙ» — РОССИЙСКАЯ СТРОИТЕЛЬНО-МОНТАЖНАЯ КОМПАНИЯ.<br/> 
        МЫ КОМАНДА ЕДИНОМЫШЛЕННИКОВ, РАБОТАЮЩАЯ НА РЫНКЕ С 2015 ГОДА.<br/> 
        ЗАЛОГ НАШЕГО УСПЕХА – ПОСТОЯННОЕ РАЗВИТИЕ.
    </p>
  )

  // img box 
  const renderImages = (
    <div className='img__box'>
        <div className='img__iso'><Image img__src={img__iso} /></div>
        <div className='cert__images'>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_1)}><Image img__src={img__cert_1} /></div>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_2)}><Image img__src={img__cert_2} /></div>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_3)}><Image img__src={img__cert_3} /></div>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_4)}><Image img__src={img__cert_4} /></div>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_5)}><Image img__src={img__cert_5} /></div>
            <div className='img__cert' onClick={() => handleShowImage(img__cert_6)}><Image img__src={img__cert_6} /></div>
        </div>
    </div>
  )
  
  // handleShowImage 
  const handleShowImage = (img) => {
    setShowImage(img);
    setCloseImage(true)
  }

  // handleCloseImage 
  const handleCloseImage = (e) => {
    setCloseImage(false)
  }

  return (
    <section className='page__about custom-section'>
        <PageBg bg={background} overlay__type_2 />
        <div className='container'>
           <div className='title'>
                <h1>{_h1}</h1>
                {renderSubtitle}
                <p className='custom__text'>В компании внедрены международные стандарты, которые  способствуют внедрению инноваций<br />
                 и преодолению глобальных вызовов. </p>
                {renderImages}
                <p className='custom__text'>На этапах проектирования и строительства ООО «ТРЕСТСТРОЙ» работает с ведущими инженерами и специалистами, чтобы гарантировать реализацию проектов в соответствии с международными стандартами отрасли. Комплексный анализ рисков и чёткие системы контроля технического обслуживания гарантируют, что проект будет соответствовать международным стандартам безопасности в течение всего срока эксплуатации. В ходе строительства применяются надёжные технологии, новейшие материалы и оборудование, что обеспечивает безопасную работу на высоте.</p>
                <Button text='ЗАКАЗАТЬ ЗВОНОК' modal__id={'modal-form'} />
            </div>
        </div>
        <div className={`image__popup ${closeImage ? 'show' : ''}`}>
            <div className='overlay' onClick={()=>handleCloseImage()}></div>
            <div className='img'>
                <span className='close' onClick={()=>handleCloseImage()}></span>
                <Image img__src={showImage} />
            </div>
        </div>
    </section>
  )
}
