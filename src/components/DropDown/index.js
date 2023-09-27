import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import {
    Link
} from 'react-router-dom'
import {
    dropData
} from '../../store/store'

function DropDown({id}) {
    const [drop,setDrop]=useState(false)
    const data = dropData.find((el) => el.id == id)
    useEffect(()=>{
     if (data.focus) {
        setDrop(false)
     }
    },[data.focus])

    return (
        <>
        <ul style={data.focus?{display:'block'}:{display:'none'}} className={styles.dropdown__list}>
            {data.data.map(data=>
            <li key={data.id} className={styles.dropdown__item}>
              {data.to?<Link className={styles.dropdown__link} to={data.to} children={data.text}/>:
              <button onClick={()=>setDrop(!drop)} className={styles.dropdown__button} children={data.text}></button>}
              <ul style={drop?{display:'block'}:{display:'none'}} className={styles.dropdown__droplist}>
                {data.drop?.map(el=><li key={el.id} className={styles.dropdown__item}>
                    <Link className={styles.dropdown__link} to={el.to} children={el.text}/>
                </li>)}
              </ul>
            </li>)}
        </ul>
        </>
    )



}

export default DropDown