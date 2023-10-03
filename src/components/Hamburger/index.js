import React, { useState } from 'react'
import styles from './index.module.scss'
import { dropData } from '../../store/store'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown';
import { buttonData } from '../../layouts/components/Navbar';
import Button from '../Button';
function Hamburger() {
    const [show ,setShow] = useState(false);
    const [focus, setFocus] = useState(false);
    function handleFocus(id) {
        dropData.forEach(element => {
          if (element.id == id) {
            element.focus = !element.focus
          } else {
            element.focus = false
          }
        });
        setFocus(!focus)
      }
     
    return (
        <div className={styles.hamburger__wrapper}>
         <button onClick={()=>setShow(!show)} className={show? styles["hamburger__close-button"]:styles.hamburger__button}></button>
         <div style={show?{display:"block"}:{display:"none"}} onClick={()=>setShow(false)} className={styles.hamburger__gradient}></div>
         <div style={show?{display:"block"}:{display:"none"}} className={styles.hamburger}>
            
            <ul className={styles.hamburger__list}>
                {dropData.map(el=>
                    <li className={styles.hamburger__item} key={el.id}>
                   <Link onMouseEnter ={()=>handleFocus(el.id)}  to={el.to} className={styles.hamburger__link} children={el.title}/>
                   <DropDown id={el.id}/>
                    </li>
                )}
            </ul>
            <Button prop={buttonData}/>
         </div>
        </div>
    )
}

export default Hamburger
