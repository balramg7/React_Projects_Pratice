import React from 'react'
import styles from "./Button.module.css";
const Button = ({sec_btn,  icon, text, ...rest }) => {
  return (
    <button {...rest} className={sec_btn ? styles.sec_btn : styles.pr_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
