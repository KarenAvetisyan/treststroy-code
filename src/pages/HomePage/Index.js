import React from 'react'
import "./homePage.css"
import background from "../../img/home-bg.webp"
import PageBg from '../../components/pageBg/PageBg'
import Button from '../../components/button/Button'

export default function HomePage() {

    //  titles
    const _h1 = <>ПРОФЕССИОНАЛЬНЫЕ СТРОИТЕЛЬНЫЕ ЛЕСА</>
    const _h2 = <>ПРОВЕДЕНИЕ РЕМОНТНЫХ И СТРОИТЕЛЬНЫХ РАБОТ</>
  
    //  head subtitle 
    const renderHeadSubtitle = (
        <p className='head__subtitle'>
            на объектах нефтеперерабатывающей, химической
            и энергетической промышленности, на объектах 
            повышенной сложности
        </p>
    )
    //  info cols 
    const renderInfoCol__1 = (
        <div className='info__col'>
            <div className='service__elem' data-id='modal-form' data-show-modal>
                МОНТАЖ
                <i className='oval'></i>
            </div>
            <div className='service__elem' data-id='modal-form' data-show-modal>
                АРЕНДА
                <i className='oval'></i>
            </div>
            <div className='service__elem' data-id='modal-form' data-show-modal>
                ПРОДАЖА
                <i className='oval'></i>
            </div>
        </div>
    )
    const renderInfoCol__2 = (
        <div className='info__col'>
            <div className='service__elem big' data-id='modal-form' data-show-modal>
                ПРОМЫШЛЕННЫЙ АЛЬПИНИЗМ
                <p>для реализации уникальных проектов</p>
                <i className='oval'></i>
            </div>
        </div>
    )

  return (
    <section className='page__home custom-section'>
        <PageBg bg={background} overlay__type_1 />
        <div className='container'>
            <div className='head__info'>
               <div className='info__box'>
                    <div className='head__title'>
                        <h1>{_h1}</h1>
                    </div>
                    <div className='info__col-wrap'>
                        {renderInfoCol__1}
                        {renderInfoCol__2}
                    </div> 
               </div>
               <div className='info__box'>
               <div className='head__title'>
                <h2>{_h2}</h2>
               </div>
                    {renderHeadSubtitle}
                    <Button text='ЗАКАЗАТЬ ЗВОНОК' modal__id={'modal-form'} />
               </div>
            </div>
        </div>
    </section>
  )
}
