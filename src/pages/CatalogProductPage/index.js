import React, { useState } from 'react'
import Produc from '../../components/Produc'
import RelatedFactory from '../../components/section/RelatedFactory'
import Navigation from '../../components/Navigation'
export default function CatalogProduct() {
  let navigationBar=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"products",
      link:"/products"
    },
    {
      title:"product",
      link:"/catalog-product"
    }
  ]
  return (
    <div style={{marginTop:"10rem"}}>
        <Navigation pathUrl={navigationBar}/>
        <Produc/>
        <RelatedFactory/>
    </div>
  )
}