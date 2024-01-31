import React  from 'react'
import styles from './index.module.scss'
import {
  dropData
} from '../../store/store'
import {
  Link
} from 'react-router-dom'
import DropDown from '../DropDown';

import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { changer } from '../../features/hamburgerSlice';

function Hamburger({animateValue} ) {

  const hamburger = useSelector((state)=>state.hamburger.value)
  const dispatch = useDispatch();

function handleClick() {
  dispatch(changer())
  animateValue()
}
  return (
      <div  className={styles.hamburger__wrapper}>
       <button onClick={()=>dispatch(changer())} className={hamburger? styles["hamburger__close-button"]:styles.hamburger__button}></button>
       <div style={hamburger?{display:"block"}:{display:"none"}} onClick={()=>dispatch(changer())} className={styles.hamburger__gradient}></div>
       <div className={hamburger?styles.hamburger:styles["hamburger--close"]}>

          <ul className={styles.hamburger__list}>
              {dropData.map(el=>
                  <li className={styles.hamburger__item} key={el.id}>
                 <Link  onClick={handleClick} to={el.to} className={styles.hamburger__link} children={el.title}/>
                  <input type='checkbox' name="check" className={el.data?styles["hamburger__item-dropbutton"]:styles["hamburger__item-dropbutton--disabled"]} ></input>
                 {el.data?<DropDown style={styles["dropdown__list"]} hover={false} id={el.id}/>:""}
                  </li> 
              )}
          </ul>
          <div className={styles["hamburger__button-wrapper"]}>
          <Button to='/ask-question' style={{color:"#fff"}} value="ЗАКАЗАТЬ ЗВОНОК" />
          </div>
       </div>
      </div>
  )
}

export default Hamburger