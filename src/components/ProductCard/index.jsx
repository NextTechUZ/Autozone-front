import React from 'react'
import Button from '../Button'
import styles from './index.module.scss'

function ProductCard({image,title,created,categoryTitle,carTitle,countryTitle}) {

    const getDateFromString = str => {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000;
        const d = new Date(str)
        return new Date(d - tzoffset).toISOString().split('T')[0]
     }
  
    return (
        <li  className={styles.product__item}>
               <img width="264" height="174" src={image ? `https://api.autozoneshop.uz/images/z${image}` : "https://picsum.photos/id/264/174"} className={styles["product__item-img"]}></img>
               <div className={styles["product__text-wrapper"]}>
                  <p className={styles["product__item-text"]}>{title}</p>
                  <p className={styles["product__item-status"]}>{countryTitle}</p>
                  <p className={styles["product__item-status"]}>{categoryTitle}</p>
                  <p className={styles["product__item-status"]}>{carTitle}</p>
                  <p className={styles["product__item-date"]}>{getDateFromString(created)}</p>
                  <Button value="ПОДРОБНЕЕ"  style={{color:"#fff"}} />
               </div>
            </li>
    )
}

export default ProductCard
