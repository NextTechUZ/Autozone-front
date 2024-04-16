import React from 'react'
import Button from '../Button'
import styles from './index.module.scss'

function ProductCard({
    id,
    image,
    title,
    created,
    categoryTitle,
    carTitle,
    countryTitle,
    price,
    description
}) {

    function formatMoney(value) {
        // Convert value to a number (in case it's a string)
        value = Number(value);
        
        // Check if the value is a valid number
        if (isNaN(value)) {
            return "Invalid input";
        }
        
        // Format the number with commas separating every three digits
        let formattedValue = value.toLocaleString();
        
        // Split the formatted value at the decimal point
        let parts = formattedValue.split('.');
        
        // If there is no decimal point, add .00 at the end
        if (parts.length === 1) {
            return parts[0] + ".00";
        }
        
        // If there is a decimal point but less than two digits after it, add zeros
        if (parts[1].length < 2) {
            parts[1] = parts[1] + "0";
        }
        
        // Return the formatted value with dot after every 3 digits
        return parts.join('.');
    }

    return (
        <li className={styles.product__item}>
            
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
                    <p className={styles["product__item-price"]}>{formatMoney(price)} сум</p>
                    <Button
                    value="ПОДРОБНЕЕ"
                    to={`/product/${id}`}
                    style={{
                    color: "#fff"
                }}/>
                </div>
        </li>
    )
}

export default ProductCard
