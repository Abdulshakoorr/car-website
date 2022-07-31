import React from 'react'
import {AiOutlineMenu , AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import logo from '../../images/logo.png'
import styles from './Navbar.module.css'
import { useState } from 'react'

const Navbar = () => {

const [show, setShow] = useState(false)


  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className={ show ? [styles.active] : [styles.list] }>
          <li><a href="/">Learn More</a></li>
          <li><a href="/">Log In</a></li>
          <li><a href="/">Sign Up</a></li>
          <li>
            <AiOutlineSearch size={25}/>
          </li>
          <li>
            <AiOutlineUser size={25}/>
          </li>
          {/* <li>
            <AiOutlineClose size={25}/>
          </li> */}
        </ul>
      </nav>
      <div className={styles.icons} onClick={()=>{
        setShow(!show)
      }} >
        {show ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </div>
    </header>
  )
}

export default Navbar