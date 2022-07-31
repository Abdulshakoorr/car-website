import React from 'react'
import styles from './Driver.module.css'
import driver from '../../images/driver.png'

const Driver = () => {
  return (
    <div className={styles.drive_container}>
        <div className={styles.drive_image}>
            <img src={driver} alt="driver" />
        </div>
        <div className={styles.drive_text}>
            <h1>Find your perfect car before you buy.</h1>
            <h2>Abdul</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisi vel consectetur euismod, nisi nisl
            </p>
            <a href="/">Select Cars</a>
        </div>        
    </div>
  )
}

export default Driver