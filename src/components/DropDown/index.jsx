import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link} from 'react-router-dom'
import {dropData} from '../../store/store'
import DropMenu from '../DropMenu'
import { useDispatch } from 'react-redux'
import { changer } from '../../features/hamburgerSlice'

function DropDown({id,hover,style}) {
    const [display,setDisplay]=useState(false);
    const [focus, setFocus] = useState(false);
    const dispatch = useDispatch();
    const data = dropData.find((el) => el.id == id)

    function handleActives(id) {
dispatch(changer())
      dropData[1].data.forEach(el=>{
        if (el.id==id) {
          el.active=true
        }
        else  el.active=false
      })
    
    }
   
     function handleClose(id) {
        if (hover) {
            dropData.forEach(element => {
                if (element.id == id) {
                  element.focus = !element.focus
                  setDisplay(!display)
                }
              }); 
              data.data.forEach((element)=>{
                  element.focus = false
            })
        } 
     }
     function handleFocus(id) {
      data.data.forEach(element => {
        if (element.id == id) {
          element.focus = !element.focus
        } else {
          element.focus = false
        } 
      });
      setFocus(!focus)
    }
  
   if (hover) {
    return (
        <>
        <ul onMouseLeave={()=>handleClose(data.id)} style={data.focus?{display:'block'}:{display:'none'}} className={styles.dropdown__list}>
            {data.data.map(data=>
            <li key={data .id} className={styles.dropdown__item}>
              <Link onMouseEnter={()=>handleFocus(data.id)}  className={styles.dropdown__link}to={data.to} children={data.text}/>
              {data.drop?<DropMenu id={id} dataId={data.id}/>:""}
            </li>
            )}
        </ul>
        </>
    )
   } 
    return (
        <>
        <ul className={style}>
            {data.data?data.data.map(data=>
            <li key={data.id} className={styles.dropdown__item}>
              <Link onClick={()=>handleActives(data.id)}  className={styles.dropdown__link} to={data.to} children={data.text}/>
            </li>):<div></div>}
        </ul>
        </>
    )



}

export default DropDown