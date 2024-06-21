import React from 'react'
import './contactPage.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import placemarkIcon from "../../img/icons/placemark.svg"
import tel__icon from "../../img/icons/tel-icon.svg"
import mail__icon from "../../img/icons/mail-icon.svg"
import Button from '../../components/button/Button'
import background from "../../img/home-bg.webp"
import PageBg from '../../components/pageBg/PageBg'
import Footer from '../../components/footer/Footer'
import Image from '../../components/image/Image';

export default function ContactPage() {
  // title 
  const _h1 = <>КОНТАКТЫ</>

  // contact info 
  const renderContactInfo = (
    <>
      <div className='single__contact'>
        <p className='c__head'>Адрес:</p>
        <span>105187, г.Москва,<br/> Окружной проезд, д.15 корп.2<br/> офис 216</span>
      </div>
      <div className='single__contact'>
          <p className='c__head'>По вопросам<br/> трудоустройства :</p>
          <p><a href='tel:+74951473777'><i className="oval__icon"><Image img__src={tel__icon} alt="" /></i> +7 (495) 147-37-77</a></p>
          <p><a href='mailto:info@treststroy.org'><i className="oval__icon"><Image img__src={mail__icon} alt="" /></i> info@treststroy.org</a></p>
      </div>
      <div className='single__contact'>
          <p className='c__head'>Пресс-служба:</p>
          <p><a href='tel:+79303782701'><i className="oval__icon"><Image img__src={tel__icon} alt="" /></i> +7 (930) 378-27-01</a></p>
      </div>
    </>
  )

  return (
    <>
    <section className='page__contacts custom-section'>
        <PageBg bg={background} overlay__type_2 />
        <div className='container'>
            <div className='title'>
                <h1>{_h1}</h1>
            </div>
            <div className='contact__box-wrap'>
                <div className='contact__text'>
                    {renderContactInfo}
                    <Button text={'ЗАКАЗАТЬ ЗВОНОК'} modal__id={'modal-form'}/>
                </div>
                <div className='contact__map'>
                <YMaps >
                <Map
                  defaultState={{
                    center: [55.788717, 37.741908],
                    zoom: 17,
                  }}
                >
                  <Placemark geometry={[55.788717, 37.741908]} 
                  options={{  

                    iconLayout: "default#image",
                    iconImageHref: placemarkIcon,
                    iconImageSize: [38, 38],
                  }}
                  
                  />
                  </Map>
                </YMaps>
                </div>  
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}
