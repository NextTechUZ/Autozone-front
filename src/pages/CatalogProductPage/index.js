import React, { useState } from 'react'
import styles from "./index.module.scss"
import Produc from '../../components/Produc'
import RelatedFactory from '../../components/section/RelatedFactory'
import Navigation from '../../components/Navigation'
export default function CatalogProduct() {
  return (
    <div>
        <Navigation/>
        <div className={styles.product_page}>
            <Produc/>
            <RelatedFactory/>
        </div>
    </div>
  )
}