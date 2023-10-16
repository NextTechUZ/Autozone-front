import React from 'react'
import Navigation from '../../components/Navigation'
import Showcase from '../../components/section/Showcase'
import { showcaseData } from '../../store/store'
import ProductList from '../../components/section/ProductsList'

function ProductsPage() {

  let navigationBar=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"products",
      link:"/products"
    }
  ]
  return (
    <div>
      <Showcase data={showcaseData} />
      <Navigation pathUrl={navigationBar}/>
      <ProductList/>
    </div>
  )
}

export default ProductsPage