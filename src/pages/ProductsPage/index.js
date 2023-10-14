import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import styles from "./style.module.scss"
import Title from '../../components/Title'
import ManuList from '../../components/section/ManuList/index'
import Faq from '../../components/section/FAQ'
import CatalogMain from '../../components/section/CatalogMain'
import { FilterIcon } from '../../img/icon'

function ProductsPage() {
  let windowWidth=window.innerWidth
  let [state,setState]=useState({toolsOpen:false,filterOpen:false})
  const FilterOpen=()=>{
    setState({filterOpen:!state.filterOpen})
  }
  return (
    <div>
      <Navigation/>
      <div className={styles.catalog_page}> 
          <div className="container">
            <Title children="MAGNUM - каталог АКБ от 60 до 230Ah" margin='2rem 0'/>
            <div className={styles.tools_section}>
              <button className={styles.filter_btn} onClick={()=>FilterOpen()}>
                <FilterIcon/>
              </button>
            </div>
            <div className={styles.Main}>
              {
                windowWidth>576||state.filterOpen?<ManuList width='33%'/>:""
              }
              <CatalogMain width={`${windowWidth<567&&!state.toolsOpen?"100%":'75%'}`} cardWidth={`${windowWidth<567?"45%":"30%"}`}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductsPage