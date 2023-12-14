import React from 'react'
import styles from './index.module.scss'
import { price } from '../../store/store';
function SelectionInput({min,max,changeMin,changeMax}) {
    function handleChangeMin(evt) {
        if (+evt.target.value < max) {
            changeMin(+evt.target.value)
        }
    }
    function handleChangeMax(evt) {
        if (+evt.target.value > min && +evt.target.value < price.max) {
            changeMax(+evt.target.value)
        }   
    }
    return (
        <div className={styles.selection}>
            <input onChange={handleChangeMin} className={styles.selection__input} type="number" defaultValue={min} />
            <input  onChange={handleChangeMax}  className={styles.selection__input} type="number"  defaultValue={max}/>
        </div>
    )
}

export default SelectionInput
