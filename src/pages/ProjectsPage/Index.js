import React from 'react'
import './projectsPage.css'
import Button from '../../components/button/Button'
import background from "../../img/home-bg.webp"
import PageBg from '../../components/pageBg/PageBg'
import img__map from '../../img/svg/big-map.svg'
import velestroy from '../../img/enterprises-icons/velestroy.webp'
import lukoil from '../../img/enterprises-icons/lukoil.webp'
import bashneft from '../../img/enterprises-icons/bashneft.webp'
import rosneft from '../../img/enterprises-icons/rosneft.webp'
import gogk from '../../img/enterprises-icons/gogk.webp'
import evrohim from '../../img/enterprises-icons/evrohim.webp'
import enel from '../../img/enterprises-icons/enel.webp'
import technip from '../../img/enterprises-icons/technip.webp'
import lafarge from '../../img/enterprises-icons/lafarge.webp'
import nxp from '../../img/enterprises-icons/nxp.webp'
import norkinel from '../../img/enterprises-icons/norkinel.webp'
import arctic from '../../img/enterprises-icons/arctic.webp'
import gazprom from '../../img/enterprises-icons/gazprom.webp'
import paper from '../../img/enterprises-icons/paper.webp'
import Image from '../../components/image/Image'

export default function ProjectsPage() {
  // title 
  const _h1 = <>ПРОЕКТЫ</>;

  // Лист проектов 
  const renderProjectList = (
    <div className='projects__list'>
      <div className='list__title'>«АРКТИК СПГ 2»</div>
      <div className='list__title'>«КОМПЛЕКС ПЕРЕГРУЗКИ УГЛЯ "ЛАВНА" Г.МУРМАНСК»</div>
      <div className='list__title'>АО «СЫЗРАНСКИЙ НПЗ»</div>
      <div className='list__title'>ООО «ЛУКОЙЛ-ВОЛГОГРАДНЕФТЕПЕРЕРАБОТКА»</div>
      <div className='list__title'>АО «Газпромнефть-ОНПЗ» г. Омск</div>
      <div className='list__title'>ПАО «ГМК „Нори́льский ни́кель“» г. Норильск</div>
      <div className='list__title'>ООО «ЛУКОЙЛ-НИЖЕГОРОДНЕФТЕОРГСИНТЕЗ»</div>
    </div>
  )

  // карта 
  const renderMapImage = (
      <div className='map__img'>
        <Image img__src={img__map} />
      </div>
  )

  // заголовок предприятиями
  const renderEnterprisesTitle = (
    <div className='project__enterprises-title'>
          <h4>ОПЫТ РАБОТЫ</h4>
          <p>С ВЕДУЩИМИ ПРЕДПРИЯТИЯМИ РОССИИ</p>
    </div>
  )

  // иконки предприятиями
  const enterprises__icons__array = [
    {icon: velestroy},
    {icon: lukoil},
    {icon: bashneft},
    {icon: rosneft},
    {icon: nxp},
    {icon: gogk},
    {icon: gazprom},
    {icon: evrohim},
    {icon: enel},
    {icon: technip},
    {icon: lafarge},
    {icon: norkinel},
    {icon: arctic},
    {icon: paper},
  ]
  const renderEnterprisesIcons = (
    <div className='project__enterprises-icons'>
      {enterprises__icons__array.map((i, index)=>{
        return <div key={index} className='pr__icon'><Image img__src={i.icon} /></div>
      })}
    </div>
  )
  return (
    <section className='page__projects custom-section'>
        <PageBg bg={background} overlay__type_3 />
        <div className='container'>
              <div className='title'>
                <h1>{_h1}</h1>
              </div>
              <div className='project__box-wrap'>
                  {renderProjectList}
                  {renderMapImage}
              </div>
              <div className='project__enterprises'>
                  {renderEnterprisesTitle}
                  <div className='project__enterprises-btn'>
                      <Button text={'ЗАКАЗАТЬ ЗВОНОК'} modal__id={'modal-form'} />
                  </div>
                  {renderEnterprisesIcons}
              </div>
        </div>
    </section>
  )
}
