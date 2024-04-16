import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss'
import NavigationStatus from '../../components/section/NavigationStatus';
import ProductsMain from '../../components/section/ProductsMain';
import { getData, oneProduct } from '../../services/useApi';
import { PRODUCT } from '../../store/axios';
import Loader from '../../components/Loader';
const ProductPage = () => {
    
    const {id}=useParams();
    const [data,setData]=useState({});
    const [products,setProducts]=useState([])
    const [relatedData,setRelatedData]=useState([]);
    const [loading,setLoading]=useState(true)
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
    
    const navData = [{
        id: 1,
        name: "ГЛАВНАЯ",
        to: "/"
      },
      {
        id: 2,
        name: "продукты",
        to: "/products"
      },
      {
        id: 3,
        name: "продукт",
        to: `/product/${id}`
      },
    ]
    
    useEffect(()=>{
        (async () => {
            setData(await oneProduct(PRODUCT.one_product(id)))
            setProducts(await getData(PRODUCT.product))
       })()
  },[id]);
  function removeProductById(products, idToRemove) {
    return products.filter(product => product._id !== idToRemove);
}
 useEffect(()=>{
    if (products?.data) {
      setLoading(false)  
      const updatedProducts = removeProductById(products.data.products, id);
      setRelatedData({...products,data:{result:updatedProducts.length,products:updatedProducts}});
    }

 },[products,loading]);

    return (
        <div className={styles["product-page"]}>
          <NavigationStatus data={navData} />
          {loading?<Loader/>:
          <div className="container">
          <div className={styles["product-page-main"]}>
            <h3 className={styles.product__name}>{data.data?.product.title}</h3>
            <div className={styles.product__wrapper}>
            <img
              width="410"
              height="345"
              src={data.data?.product.image? `https://api.autozoneshop.uz/images/${data.data?.product.image}`: "https://picsum.photos/id/264/174"}
              className={styles["product__img"]}></img>
              <div className={styles.product__info}>
                  <h4 className={styles["product__info-title"]}>Коротко о товаре</h4>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Страна</p>
                      <p className={styles["product__info-ans"]}>{data.data?.product.country.title}</p>
                   </div>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Машина</p>
                      <p className={styles["product__info-ans"]}>{data.data?.product.car.title}</p>
                   </div>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Категория</p>
                      <p className={styles["product__info-ans"]}>{data.data?.product.category.title}</p>
                   </div>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Дата производства</p>
                      <p className={styles["product__info-ans"]}>{data.data?.product.created.split("T")[0]}</p>
                   </div>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Описание</p>
                      <p className={styles["product__info-ans"]}>{data.data?.product.description}</p>
                   </div>
                   <div className={styles["product__info-dialog"]}>
                      <p className={styles["product__info-req"]}>Цена</p>
                      <p className={styles["product__info-ans"]}>{formatMoney(data.data?.product.price)} сум</p>
                   </div>
              </div>
            </div>
          </div>
          <h3 className={styles["product__name"]}>Сопутствующие товары</h3>
           <ProductsMain data={relatedData.data}/>
        </div>}
        </div>
    );
}
 
 
export default ProductPage;