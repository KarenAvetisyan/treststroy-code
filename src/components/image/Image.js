import React from 'react'

export default function Image({img__src, classlist, alt}) {
  return (
    <img src={img__src} alt={alt?alt:''} className={classlist} width='' height='' />
  )
}
