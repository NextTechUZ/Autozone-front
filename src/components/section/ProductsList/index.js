import React, { useState } from 'react'
import { FilterIcon } from '../../../img/icon'
import Title from '../../Title'
import CatalogMain from '../CatalogMain'
import styles from "./styles.module.scss"
import ManuList from '../ManuList'
export default function ProductList({
  menuData,
  productData
}) {
    let windowWidth=window.innerWidth
    let [state,setState]=useState({toolsOpen:false,filterOpen:false})
    const FilterOpen=()=>{
        setState({filterOpen:!state.filterOpen})
    }
  return (
    <div className={styles.products_section}> 
          <div className="container">
            <Title children="MAGNUM - каталог АКБ от 60 до 230Ah" margin='2rem 0'/>
            <div className={styles.tools_section}>
              <button className={styles.filter_btn} onClick={()=>FilterOpen()}>
                <FilterIcon/>
              </button>
            </div>
            <div className={styles.Main}>
                {
                  windowWidth>576||state.filterOpen?<ManuList width='33%' menuData={menuData}/>:""
                }
                <CatalogMain width={`${windowWidth<567&&!state.toolsOpen?"100%":'75%'}`}/>
            </div>
          </div>
        </div>
  )
}
