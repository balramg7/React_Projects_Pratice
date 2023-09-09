import React from 'react'
import styles from "./Button.module.css";
const Button = ({sec_btn,  icon, text}) => {
  return (
    <button className={sec_btn ? styles.sec_btn : styles.pr_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
