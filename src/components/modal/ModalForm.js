import React from 'react'
import "./ModalForm.css"
import {useState} from 'react'

export default function ModalForm() {
   const initValCode = '+7';
   const [maskedValue, setMaskedValue] = useState("")
    
  const handleCloseModal = (e) => {
    e.target.closest('.modal').classList.remove('active');
  }
    const handleMaskedValue = (e) => {
        const inpVal = e.target.value
        setMaskedValue(
        inpVal.replace(/\D/g, '')
        .replace(/^(\d)/, '($1')
        .replace(/^(\(\d{3})(\d)/, '$1) $2')
        .replace(/(\d{3})(\d{1,5})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
        )
        if (inpVal.trim() === "") {
            e.target.classList.remove('active')
          } else {
            e.target.classList.add('active')
          }
    }


  return (
    <div className="modal" id="modal-form">
        <div className="modal-overlay" onClick={handleCloseModal}></div>
        <div className="m-container">
            <div className="m-close" onClick={handleCloseModal}></div>
            <div className="m-content">
                <div className="form__box">
                    <form action="">
                        <div className="field">
                            <input type="text" placeholder="Ваше имя" required />
                        </div>
                        <div className="field">
                            <input type="tel" value={`${maskedValue}`} onChange={e => handleMaskedValue(e)} className='js-tel__mask' placeholder="Введите Ваш телефон" required />
                            <span className='country__code'>{initValCode}</span>
                        </div>
                        <textarea placeholder='Тема обращения'></textarea>
                        <button className="btn submit">Отправить</button>
                        <label className="checkbox__label">
                            <input type="checkbox" required />
                            <p>Соглашаюсь с <a href="#">условиями соглашения</a></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
