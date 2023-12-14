import React from 'react'
import styles from './index.module.scss'
function SelectionInput({min,max}) {
    return (
        <div className={styles.selection}>
            <input className={styles.selection__input}  type="text" defaultValue={min} />
            <input className={styles.selection__input} type="text"  defaultValue={max}/>
        </div>
    )
}

export default SelectionInput
