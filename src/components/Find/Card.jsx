import React from 'react'
import styles from './Find.module.css'



const Card = ({image,company}) => {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_image}>
            <img src={image} alt=""/>
        </div>
        <h1>{company}</h1>
    </div>
  )
}

export default Card