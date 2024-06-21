import React from 'react'
import './offerPage.css'
import Button from '../../components/button/Button'
import background from "../../img/home-bg.webp"
import PageBg from '../../components/pageBg/PageBg'
import img__safe_1 from '../../img/safe-work1.webp'
import img__safe_2 from '../../img/safe-work2.webp'
import img__group from '../../img/group.webp'
import img__complex_1 from '../../img/complex-service1.webp'
import img__complex_2 from '../../img/complex-service2.webp'
import img__specialist_1 from '../../img/specialist-1.webp'
import img__specialist_2 from '../../img/specialist-2.webp'
import Image from '../../components/image/Image'

export default function OfferPage() {
  // title 
  const _h1 = <>МЫ ПРЕДЛАГАЕМ</>;

  // левая колонка 
  const renderLeftCol = (
    <>
      <div className='offer__box'>
          <div className='offer__title'>МАКСИМАЛЬНАЯ БЕЗОПАСНОСТЬ РАБОТ НА ВЫСОТЕ</div>  
            <div className='offer__img'>
                <div className='img img__small'>
                  <Image img__src={img__safe_1} />
                  </div>
                <div className='img'>
                  <Image img__src={img__safe_2} />
                </div>
            </div>
      </div>
      <div className='offer__box'>
          <div className='offer__title'>ЕДИНАЯ СЛУЖБА КОМПЛЕКСНОГО СЕРВИСА ПО ПОСТАВКЕ ЛЕСОВ И ИЗОЛЯЦИИ: 
            <span> АРЕНДА/ПРОДАЖА + МОНТАЖ/ДЕМОНТАЖ + ТРАНСПОРТИРОВКА СТРОИТЕЛЬНЫХ ЛЕСОВ</span>  
          </div>  
            <div className='offer__img'>
                <div className='img img__small'>
                    <Image img__src={img__complex_1} />
                  </div>
                <div className='img'>
                  <Image img__src={img__complex_2} />
                </div>
            </div>
      </div>
      <div className='offer__box'>
          <div className='offer__title'>ШИРОКИЙ ВЫБОР СОВРЕМЕННЫХ ТЕХНИЧЕСКИХ РЕШЕНИЙ — ДЛЯ НАС 
          НЕ СУЩЕСТВУЕТ НЕРЕШАЕМЫХ ЗАДАЧ
          </div> 
      </div>
      <div className='offer__box'>
          <div className='offer__title'>НАВОДИМ ПОРЯДОК РАБОТ НА ВЫСОТЕ</div> 
      </div>
    </>
  )

  // правая колонк 
  const renderRightCol = (
    <>
        <div className='offer__box'>
            <div className='offer__title'>МЫ СПОСОБНЫ ОРГАНИЗОВАТЬ РАБОТУ В КРУГЛОСУТОЧНОМ РЕЖИМЕ</div>  
              <div className='offer__img'>
                  <div className='img'><Image img__src={img__group} /></div>
              </div>
        </div>
        <div className='offer__box'>
            <div className='offer__title'>ВСЕ РАБОТЫ ВЫПОЛНЯЮТ УЗКОСПЕЦИАЛИЗИРОВАННЫЕ ПРОФЕССИОНАЛЫ</div>  
              <div className='offer__img'>
                  <div className='img img__small'><Image img__src={img__specialist_1}  /></div>
                  <div className='img'><Image img__src={img__specialist_2} alt='' /></div>
              </div>
        </div>
        <div className='offer__box'>
          <div className='offer__title'>ВЫ НЕ ОТВЛЕКАЕТЕСЬ НА ВСПОМОГАТЕЛЬНЫЕ РАБОТЫ И ЭКОНОМИТЕ СВОЕ ВРЕМЯ</div> 
        </div>
    </>
  )

  return (
    <section className='page__offer custom-section'>
      <PageBg bg={background} overlay__type_2 />
        <div className='container'>
              <div className='title'>
                <h1>{_h1}</h1>
              </div>
              <div className='offer__col-wrap'>
                  <div className='offer__col'>
                    {renderLeftCol}
                  </div>
                  <div className='offer__col'>
                     {renderRightCol}
                    <Button text='ЗАКАЗАТЬ ЗВОНОК' modal__id={'modal-form'} />
                  </div>
              </div>
        </div>
    </section>
  )
}
