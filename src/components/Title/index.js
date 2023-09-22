import React from 'react';
import styles from './index.module.scss'

function Title({title,text="",color}) {
    return (
        <div style={{color:color}}>
             <h2 className={styles.title}>{title}</h2>
           <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Title
