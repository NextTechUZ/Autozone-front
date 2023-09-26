import React from 'react'

import Advantages from '../../components/section/Advantages'
import Services from '../../components/section/ServiceSection'
import Info from '../../components/section/Info'
import News from '../../components/section/News'
import Partners from '../../components/section/Partners'
import Directory from '../../components/section/Directory'
import { data } from '../CategoryPage'

function HomePage() {

  return (
    <>
    <Advantages/>
    <Directory data={data} title="Автотовары: аксессуары, 
    расходники и многое другое" subtitle="PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. "/>
    <Services/>
    <Info/>
    <News/>
    <Partners />
    </>
  )
}

export default HomePage