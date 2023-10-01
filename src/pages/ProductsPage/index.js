import React from 'react'
import Navigation from '../../components/Navigation'
import styles from "./style.module.scss"
import Title from '../../components/Title'
import ManuList from '../../components/section/ManuList/index'
import Faq from '../../components/section/FAQ'
import CatalogMain from '../../components/section/CatalogMain'

function ProductsPage() {
  return (
    <div>
      <Navigation/>
      <div className={styles.catalog_page}> 
          <div className="container">
            <Title children="MAGNUM - каталог АКБ от 60 до 230Ah"/>
            <div className={styles.Main}>
              <ManuList/>
              <CatalogMain/>
            </div>
          </div>
        </div>
          <Faq/> 
    </div>
  )
}

export default ProductsPage