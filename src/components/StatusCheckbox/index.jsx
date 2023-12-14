import React from 'react';
import styles from './index.module.scss'

function StatusCheckbox() {
    return (
        <div className={styles.checkbox__wrapper}>
            <div className={styles['checkbox__input-wrapper']}>
                <input id='checkbox_one' type="checkbox" className={styles["checkbox__input"]} />
                <label htmlFor="checkbox_one" className={styles["checkbox__check-label"]}></label>
                <label htmlFor="checkbox_one" className={styles.checkbox__label}>В НАЛИЧИИ</label>
            </div>
            <div className={styles['checkbox__input-wrapper']}>
                <input id='checkbox_two' type="checkbox" className={styles["checkbox__input"]} />
                <label htmlFor="checkbox_two" className={styles["checkbox__check-label"]}></label>
                <label htmlFor="checkbox_two" className={styles.checkbox__label}>ПОД ЗАКАЗ</label>
            </div>
        </div>
    )
}

export default StatusCheckbox
