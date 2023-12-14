import React, {
  useState
} from 'react'
import styles from './index.module.scss'
import {
  dropData
} from '../../store/store'
import {
  Link
} from 'react-router-dom'
import DropDown from '../DropDown';

import Button from '../Button';

function Hamburger() {
  const [show, setShow] = useState(false);
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
  var check = 0;

  function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');
  
    if (check == 0) {
      check = 1
      checkboxes[checkbox - 1].checked = true
    } else if (check == 1) {
      check = 0;
      checkboxes[checkbox - 1].checked = false
    } 
    
  }

  return (
      <div  className={styles.hamburger__wrapper}>
       <button onClick={()=>setShow(!show)} className={show? styles["hamburger__close-button"]:styles.hamburger__button}></button>
       <div style={show?{display:"block"}:{display:"none"}} onClick={()=>setShow(false)} className={styles.hamburger__gradient}></div>
       <div className={show?styles.hamburger:styles["hamburger--close"]}>

          <ul className={styles.hamburger__list}>
              {dropData.map(el=>
                  <li className={styles.hamburger__item} key={el.id}>
                 <Link   to={el.to} className={styles.hamburger__link} children={el.title}/>
                  <input type='radio' onClick={()=>onlyOne(el.id)} name="check" className={el.data?styles["hamburger__item-dropbutton"]:styles["hamburger__item-dropbutton--disabled"]} ></input>
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