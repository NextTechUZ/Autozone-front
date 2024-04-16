import React, { forwardRef } from 'react'
import styles from './index.module.scss'

const Input=forwardRef(function(props,ref) {
    let border=`4px solid ${props.color}`
    if (props.textarea) {
        return(
        <div className={styles["input-wrapper"]}>
            <label style={{color:props.color}} className={styles["input-label"]} htmlFor={props.id}>{props.info}</label>
             <textarea required={props.required}  ref={ref}  className={styles["input"]} style={{minHeight:"88px",border:border}} id={props.id} type={props.type} placeholder={props.placeholder} />
         </div>
        )
    }
    return (
        <div className={styles["input-wrapper"]}>
           <label style={{color:props.color}} className={styles["input-label"]} htmlFor={props.id}>{props.info}</label>
            <input required={props.required} style={{border:border}} ref={ref} className={styles.input} id={props.id} type={props.type} placeholder={props.placeholder} />
        </div>
    )
})

export default Input
