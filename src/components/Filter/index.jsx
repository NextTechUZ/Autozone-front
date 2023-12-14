import React from 'react'
import styles from './style.module.scss'
import FilterDrop from '../FilterDrop'
import Range from '../RangeInput'
import FilterCategory from '../FilterCategory'
import FilterSelection from '../FilterSelection'

function Filter({dropdata,onClick,queryObject}) {
    (function handleChecked() {
        Object.keys(queryObject).forEach((element)=>{
          let checkboxes = document.getElementById(element)
          if (checkboxes) {
           checkboxes.checked=true
          }
        })
        Object.values(queryObject).forEach((element)=>{
          let checkboxes = document.getElementById(element)
          if (checkboxes) {
           checkboxes.checked=true
          }
        })
      })()

    return (
        <section className={styles.filter}>
            <FilterCategory queryObject={queryObject} onClick={onClick} dropdata={dropdata}/>
             <FilterSelection/>
        </section>
    )
}

export default Filter
