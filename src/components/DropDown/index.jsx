import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link} from 'react-router-dom'
import {dropData} from '../../store/store'
import DropMenu from '../DropMenu'
import { useDispatch } from 'react-redux'
import { changer } from '../../features/hamburgerSlice'

function DropDown({id,hover,style,className}) {
    const dispatch = useDispatch();
    const data = dropData.find((el) => el.id == id)

   if (hover) {
    return (
       <div className={`${className} ${styles.dropdown}`}>
        <ul  className={styles.dropdown__list}>
            {data.data.map(data=>
            <li key={data .id} className={styles.dropdown__item}>
              <Link   className={styles.dropdown__link}to={data.to} children={data.text}/>
              {data.drop?<DropMenu className={styles.dropdown__drop} id={id} dataId={data.id}/>:""}
            </li>
            )}
        </ul>
       </div>
    )
   } 
    return (
   
        <ul className={style}>
            {data.data?data.data.map(data=>
            <li key={data.id} className={styles.dropdown__item}>
              <Link  onClick={()=>dispatch(changer())} className={styles.dropdown__link} to={data.to} children={data.text}/>
            </li>):<div></div>}
        </ul>
   
    )



}

export default DropDown