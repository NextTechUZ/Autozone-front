import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import Button from '../../Button'

function ProductNotFound() {
    return (
        <div className={styles.product}>
            <div className={styles.product__wrapper}>
                <Title textAlign='left' size='3.2rem' fontStyle='normal' fontWeight='800' color='#fff' children="В ДАННЫЙ МОМЕНТ ТОВАР ОТСУТСТВУЕТ" maxWidth='405px'/>
                 <div className={styles.product__buttons}>
                    <Button style={{color:"#fff",border:"4px solid #fff",marginRight:"16px"}} value="ВЕРНУТЬСЯ "/>
                    <Button style={{color:"#1D1D1D",border:"4px solid #1D1D1D"}} value="ОБРАТИТЬСЯ К МЕНЕДЖЕРУ"/>
                 </div>
            </div>
        </div>
    )
}

export default ProductNotFound
