import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../ProductCard'
import ProductNotFound from '../ProductNotFound';

function ProductsMain({ data }) {
   console.log(data);
if (data.status) {
   return(
      <h2 className='error-text'>{data.status}</h2>
   )
}
   return (
      <ul className={styles.product__list}>
         {data.data.data.result?data?.data?.data?.products.map(({_id,image,title,created,category,car,country})=>
            <ProductCard key={_id} image={image} title={title} created={created} carTitle={car.title} countryTitle={country.title} categoryTitle={category.title}/>
         ):<ProductNotFound/>}
      </ul>
   )
}

export default ProductsMain
