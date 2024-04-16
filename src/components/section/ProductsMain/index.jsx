import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../ProductCard'
import ProductNotFound from '../ProductNotFound';

function ProductsMain({ data ,error}) {
console.log(data);
if (error) {
   return(
      <h2 className='error-text'>Network Error</h2>
   )
}
   return (
      <ul className={styles.product__list}>
         {data.data.data.result?data?.data?.data?.products.map(({_id,image,title,created,category,car,country,price,description})=>
            <ProductCard key={_id} image={image} title={title} created={created} carTitle={car.title} countryTitle={country.title} price={price} categoryTitle={category.title} description={description}/>
         ):<ProductNotFound/>}
      </ul>
   )
}

export default ProductsMain
