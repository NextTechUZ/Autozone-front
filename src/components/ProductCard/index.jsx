import React from 'react'
import Button from '../Button'
import styles from './index.module.scss'

function ProductCard({
    image,
    title,
    created,
    categoryTitle,
    carTitle,
    countryTitle,
    price,
    description
}) {

    const getDateFromString = str => {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000;
        const d = new Date(str)
        return new Date(d - tzoffset)
            .toISOString()
            .split('T')[0]
    }

    return (
        <li className={styles.product__item}>
            {/* <img
                width="260"
                height="174"
                src={image? `https://api.autozoneshop.uz/images/${image}`: "https://picsum.photos/id/264/174"}
                className={styles["product__item-img"]}></img>
            <div className={styles["product__text-wrapper"]}>
                <p className={styles["product__item-text"]}>{title}</p>
                <p className={styles["product__item-status"]}><span className={styles['product__item-span']}>страна:</span>{countryTitle}</p>
                <p className={styles["product__item-status"]}><span className={styles['product__item-span']}>категория:</span>{categoryTitle}</p>
                <p className={styles["product__item-status"]}><span className={styles['product__item-span']}>машина:</span>{carTitle}</p>
                <div className={styles["product__item-status-wrapper"]}>
                    <p className={styles["product__item-date"]}><span className={styles['product__item-span']}>цена:</span>{price}</p>
                    <p className={styles["product__item-date"]}>{getDateFromString(created)}</p>
                </div>
                <Button
                    value="ПОДРОБНЕЕ"
                    style={{
                    color: "#fff"
                }}/>
            </div> */}
            <img
                width="264"
                height="174"
                src={image? `https://api.autozoneshop.uz/images/${image}`: "https://picsum.photos/id/264/174"}
                className={styles["product__item-img"]}></img>
                <div className={styles["product__text-wrapper"]}>
                    <ul className={styles["product__category__list"]}>
                      <li className={styles["product__category-list-item"]}>{countryTitle}</li>
                      <li className={styles["product__category-list-item"]}>{categoryTitle}</li>
                      <li className={styles["product__category-list-item"]}>{carTitle}</li>
                    </ul>
                    <p className={styles["product__item-text"]}>{title}</p>
                    <p className={styles["product__item-description"]}>{description}</p>
                    <p className={styles["product__item-price"]}>{price} сум</p>
                    <Button
                    value="ПОДРОБНЕЕ"
                    style={{
                    color: "#fff"
                }}/>
                </div>
        </li>
    )
}

export default ProductCard
