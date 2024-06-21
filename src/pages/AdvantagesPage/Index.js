import React from 'react'
import background from "../../img/advantages-bg.webp"
import './advantagesPage.css'
import advantagesMap from "../../img/svg/advantages-map.svg"
import mapPic from "../../img/svg/map-pic.svg"
import opitPic from "../../img/svg/opit-pic.svg"
import sapPic from "../../img/svg/sap-pic.svg"
import securityPic from "../../img/svg/security-pic.svg"
import specialistPic from "../../img/svg/specialist-pic.svg"
import qualityPic from "../../img/svg/quality-control-pic.svg"
import engineerPic from "../../img/svg/engineer-pic.svg"
import employeesPic from "../../img/svg/employees-pic.svg"
import PageBg from '../../components/pageBg/PageBg'
import Button from '../../components/button/Button'
import Image from '../../components/image/Image'

export default function AdvantagesPage() {

  // title 
  const _h1 = <>НАШИ<br/> ПРЕИМУЩЕСТВА</>;

  // map info 
  const renderMapInfo = (
    <>
      <div className='map__info i-1'>
          <i className="icon-mob"><Image img__src={mapPic} /></i>
          <span className='info__title'>РАБОТАЕМ ПО&nbsp;ВСЕЙ&nbsp;РОССИИ</span>
      </div>
      <div className='map__info i-2'>
          <i className="icon-mob"><Image img__src={opitPic} /></i>
          <span className='info__title'>БОЛЬШОЙ ОПЫТ РАБОТЫ</span>
          <span className='info__text'>как в условиях текущих ремонтов,  
          так и в условиях капитального ремонта и сжатых сроков</span>
      </div>
      <div className='map__info i-3'>
          <i className="icon-mob"><Image img__src={securityPic} /></i>
          <span className='info__title'>СОБСТВЕННЫЙ ОТДЕЛ ОХРАНЫ ТРУДА</span>
      </div>
      <div className='map__info i-4'>
          <i className="icon-mob"><Image img__src={specialistPic} /></i>
          <span className='info__title'>ВЫСОКОКВАЛИФИЦИРОВАННЫЕ ЛИНЕЙНЫЕ СПЕЦИАЛИСТЫ</span>
      </div>
      <div className='map__info i-6'>
          <i className="icon-mob"><Image img__src={sapPic} /></i>
          <span className='info__title'>ПРОФЕССИОНАЛЬНОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ&nbsp;SAP
              &nbsp;<span className='info__text'>для оптимизации количества персонала и продолжительности проекта</span>
          </span>
      </div>
      <div className='map__info i-7'>
          <i className="icon-mob"><Image img__src={engineerPic} /></i>
          <span className='info__title'>СОБСТВЕННЫЙ ИНЖЕНЕРНЫЙ ОТДЕЛ</span>
      </div>

      <div className='map__info i-8'>
          <i className="icon-mob"><Image img__src={qualityPic} /></i>
          <span className='info__title'>ПОСТОЯННЫЙ КОНТРОЛЬ КАЧЕСТВА</span>
      </div>
      <div className='map__info i-5'>
          <i className="icon-mob"><Image img__src={employeesPic} /></i>
          <span className='info__title'>БОЛЕЕ 1000<br/> СОТРУДНИКОВ</span>
      </div>

    </>
  )

  return (
      <section className='page__advantages custom-section'>
        <PageBg bg={background} overlay__type_2 />
        <div className='container'>
            <div className='title'>
              <h1>{_h1}</h1>
            </div>
            <div className='adv__map-box'>
              {renderMapInfo}
              <Image classlist={'adv__img'} img__src={advantagesMap} />
            </div>
            <Button text='ЗАКАЗАТЬ ЗВОНОК' modal__id={'modal-form'} />
        </div>
      </section>
  )
}
