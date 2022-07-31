import React from 'react'
import styles from './Footer.module.css'
import footerlogo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className={styles.footer__container}>
        <div className={styles.logo}>
            <img src= {footerlogo} alt="" />
            <a href="/"> Share A Car</a>
        </div>
        <p>Copyright &copy; 2022 Abdul shakoor </p>
    </div>
  )
}

export default Footer