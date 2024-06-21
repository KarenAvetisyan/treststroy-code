import React from 'react'
import "./PageBg.css"

export default function PageBg({bg, overlay__type_1, overlay__type_2, overlay__type_3}) {
  return (
    <div className={`page--bg ${overlay__type_1 ? 'overlay__type_1' : ''}${overlay__type_2 ? 'overlay__type_2' : ''}${overlay__type_3 ? 'overlay__type_3' : ''}`} 
    style={{backgroundImage: `url(${bg})`}}>
      {overlay__type_1 && <div className='top__gradient'></div>}
    </div>
  )
}
