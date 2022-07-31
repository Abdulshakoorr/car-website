import React from 'react'
import styles from './Hero.module.css'
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <form className={styles.form}>
            <div className={styles.text}>
                <label>Where</label>
                <input type="text"  placeholder='Search location'/>
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type="date" />
            </div>
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>Until</label>
                <input type="date" />
            </div>
            <div className={styles.search}>
                
                <button>Search For Car <AiOutlineSearch className={styles.icon}  size={25}/></button>
            </div>
        </form>
    </section>
  )
}

export default Hero