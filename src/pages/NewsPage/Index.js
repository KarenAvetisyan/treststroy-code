import React from 'react'
import './newsPage.css'
import Button from '../../components/button/Button'
import background from "../../img/advantages-bg.webp"
import Pagination from '../../components/pagination/Pagination'
import PageBg from '../../components/pageBg/PageBg'
import img__news_1 from '../../img/news-img-1.webp'
import img__news_2 from '../../img/news-img-2.webp'
import img__news_3 from '../../img/news-img-3.webp'
import Image from '../../components/image/Image'

export default function NewsPage() {
  // title 
  const _h1 = <>НОВОСТИ</>

  // news array 
  const news__array = [
    {
      img_src: img__news_1,
      date: '26 февраля 2024',
      desc: 'Провели предпроектное обследование (Специалисты выехали на место производства работ и осуществят проектирование с учетом пожеланий Заказчика. ',
      link: '#',
    },  
    {
      img_src: img__news_2,
      date: '29 февраля 2024',
      desc: 'Монтаж/демонтаж строительных   лесов на территории ООО «ЛУКОЙЛ- Волгограднефтепереработка» на период планового остановочного ремонта.',
      link: '#',
    },
    {
      img_src: img__news_3,
      date: '1 марта 2024',
      desc: 'Для реализации проекта было использовано 320 тонн строительных лесов.',
      link: '#',
    },
  ]
  const renderNewsList = (
    news__array.map((m, index)=>{
      return (
        <div key={index} className='single__news'>
          <a href={m.link} className='news__link'></a>
              <div className='news__img'><Image img__src={m.img_src} /></div>
              <div className='news__desc'>
                  <span className='date'>{m.date}</span>
                  <p>{m.desc}</p>
              </div>
        </div>
      )
    })
  )

  return (
    <section className='page__news custom-section'>
         <PageBg bg={background} overlay__type_2 />
         <div className='container'>
              <div className='title'>
                  <h1>{_h1}</h1>
              </div>
              <div className='news__content'>
                  {renderNewsList}
              </div>
              <div className='news__bottom-wrap'>
                <Pagination />
                <Button text={'ЗАКАЗАТЬ ЗВОНОК'} modal__id={'modal-form'}/>
              </div>
         </div>
    </section>
  )
}
