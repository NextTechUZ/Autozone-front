import React from 'react'
import styles from './index.module.scss'
import Button from '../../Button';

function ProductsMain({data}) {
    const getDateFromString = str => {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000;
        const d = new Date(str)
        return new Date(d - tzoffset).toISOString().split('T')[0]
        }
    return (
        <ul className={styles.product__list}>
           {data.map(el=>
           <li key={el._id} className={styles.product__item}>
              <img width="264" height="174" src={el.image?el.image:"https://picsum.photos/id/264/174"} className={styles["product__item-img"]}></img>
              <div className={styles["product__text-wrapper"]}>
              <p className={styles["product__item-text"]}>{el.title}</p>
              <p className={styles["product__item-date"]}>{getDateFromString(el.created)}</p>
              <Button value="ПОДРОБНЕЕ" color="#fff"/>
              </div>
           </li>
           )}
        </ul>
    )
}

export default ProductsMain
