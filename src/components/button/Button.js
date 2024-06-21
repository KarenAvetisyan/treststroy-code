import React from 'react'
import styles from "./Button.module.css"

export default function Button({text, modal__id}) {
  return (
    <button className={`primary--btn ${styles.primary__btn}`}  data-id={modal__id} data-show-modal>
        {text}
        <i className={styles.oval}></i>
    </button>
  )
}
