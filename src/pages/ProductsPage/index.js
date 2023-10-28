import React from 'react'
import Navigation from '../../components/Navigation'
import Showcase from '../../components/section/Showcase'
import { showcaseData } from '../../store/store'
import ProductList from '../../components/section/ProductsList'
import { useLocation, useParams } from 'react-router-dom'
import { useQueries, useQuery, useQueryClient } from 'react-query'
import { myAxios } from '../../utils/myAxios'
import { FetchData } from '../../hook/fetchAxios'

function ProductsPage() {

  let navigationBar=[
    {
      title:"ГЛАВНАЯ",
      link:"/"
    },
    {
      title:"ПРОДУКТЫ",
      link:"/products"
    }
  ]
  let {search}=useLocation()
  let categoryId=new URLSearchParams(search).get("itemId")
  const {data:products}=useQuery(["products",categoryId],()=>FetchData(`/product?category=${categoryId}`))
 
  let munuData=[
    {id:1,title:"category",api:"/category"},
    {id:2,title:"countries",api:"/country"},
    {id:3,title:"cars",api:"/car"},
  ]
  return (
    <div>
      <Showcase data={showcaseData} />
      <Navigation pathUrl={navigationBar}/>
      <ProductList menuData={munuData}/>
    </div>
  )
}

export default ProductsPage