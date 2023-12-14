import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../ProductCard'

function ProductsMain({ data }) {
   
   return (
      <ul className={styles.product__list}>
         
         {data?.data?.data?.products.map(({_id,image,title,created,category,car,country})=>
            <ProductCard key={_id} image={image} title={title} created={created} carTitle={car.title} countryTitle={country.title} categoryTitle={category.title}/>
         
         )}
      </ul>
   )
}

export default ProductsMain
