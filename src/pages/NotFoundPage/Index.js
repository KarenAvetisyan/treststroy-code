import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className='page__error custom-section'>
         <div className='container'>
            <div className='error__box'>
            <h1>Error 404</h1>
            <p>Страница не найдено</p>
             <Link to='/'>НА ГЛАВНУЮ</Link>
            </div>
        </div>
    </section>
  )
}
