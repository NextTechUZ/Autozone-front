import React from 'react'
import styles from '../Filter/style.module.scss'
import Range from '../RangeInput'
import SelectionInput from '../SelectionInput'
import StatusCheckbox from '../StatusCheckbox'
import Button from '../Button'

function FilterSelection() {
    return (
        <div className={styles["filter__selection-wrapper"]}>
            <h3 className={styles["filter__selection-title"]}>ПОДБОР ПАРАМЕТРОВ</h3>
            <input type="checkbox" id='price__checkbox' className={styles["filter__selection-checkbox"]} />
             <div className={styles["filter__selection-wrapper"]}>
                <label htmlFor='price__checkbox' className={styles["filter__selection-label"]}>ЦЕНА</label>
                <div className={styles["filter__selection-item-wrapper"]}>
                    <SelectionInput min={0} max={1000}/>
                    <Range/>    
                </div>
             </div>
             <input type="checkbox" id='status__checkbox' className={styles["filter__selection-checkbox"]} />
             <div className={styles["filter__selection-wrapper"]}>
             <label htmlFor='status__checkbox' className={styles["filter__selection-label"]}>СТАТУС</label>
                <div className={styles["filter__selection-item-wrapper"]}>
                    <StatusCheckbox/>
                </div>
             </div>
             <div className={styles["filter__selection-buttons"]}>
                <Button  style={{padding:"8px 16px" , color:"#fff"}}  value="ПОКАЗАТЬ" />
                <Button style={{padding:"8px 16px" , color:"#fff"}} value="СБРОСИТЬ" />
             </div>
             <p className={styles["filter__selection-info"]}>Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель нашего магазина - предложение широкого ассортимента товаров.</p>
        </div>
    )
}

export default FilterSelection
