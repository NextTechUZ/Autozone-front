import React, { useEffect, useState } from 'react'
import Title from '../../Title'
import Subtitle from '../../Subtitle'
import Pagination from '../../Pagination'
import FactoryCard from '../../FactoryCard'
import styles from "./index.module.scss"
export default function SearchSection() {
  let [state,setState]=useState()
  useEffect(()=>{
    setState({...state,data:BackendData().drop})
  },[])
  let getPaginationNumbe=(num)=>{
    setState({...state,PagNum:num})
  }
  let windowWidth=window.innerWidth
  return (
    <div style={{margin:"10rem 0"}}>
      <div className='container'>
        <Title outline={true}>ПОиск</Title>
        <Subtitle margin='2rem 0'>Результаты поиска</Subtitle>

        <div className={styles.cards_area}>
          {
            state?.data.map((item,index)=><FactoryCard key={index} item={item}/>)
          }
        </div>
        <Pagination PaginationSum={BackendData().sum} get={getPaginationNumbe} active="4" margin='4rem 0'/>
      </div>
    </div>
  )
}
export  const BackendData=(num)=>{
  let drop=[]
  for(let i=1;i<=10;i++){
      drop.push({id:i,title:"Mag",about:"best"})
  }
 return {
      sum:34,
      drop
 }
}
