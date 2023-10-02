import React from 'react'

import Advantages from '../../components/section/Advantages'
import Services from '../../components/section/ServiceSection'
import Info from '../../components/section/Info'
import News from '../../components/section/News'
import Partners from '../../components/section/Partners'
import Directory from '../../components/section/Directory'
import { data } from '../CategoryPage'
import { newsData } from '../../store/store'
import Showcase from '../../components/section/Showcase'
import ShowcaseImg1 from "../../img/showcaseBg1.png";
import ShowcaseImg2 from "../../img/showcaseBg2.png";
import ShowcaseImg3 from "../../img/showcaseBg3.png";
import part1 from "../../img/partne1.png";
import part2 from "../../img/partne2.png"
import part3 from "../../img/partne3.png"
import part4 from "../../img/partne4.png"
import part5 from "../../img/partne5.png"

const showcaseDAta = [
  {
    id: 1,
    bgImg: ShowcaseImg1,
    title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
    subtitle:
      "Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.",
  },
  {
    id: 2,
    bgImg: ShowcaseImg2,
    title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
  {
    id: 3,
    bgImg: ShowcaseImg3,
    title: "БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
];
const partnersData=[
  {
    id:1,
    img:part1,
    width:"166",
    height:"52"
  },
  {
    id:2,
    img:part2,
    width:"166",
    height:"48"
  },
  {
    id:3,
    img:part3,
    width:"166",
    height:"25"
  },
  {
    id:4,
    img:part4,
    width:"165",
    height:"45"
  },
  {
    id:5,
    img:part5,
    width:"105",
    height:"90"
  },
  {
    id:6,
    img:part4,
    width:"165",
    height:"45"
  },
  {
    id:7,
    img:part5,
    width:"105",
    height:"90"
  }
]
function HomePage() {

  return (
    <>
    <Showcase data={showcaseDAta}/>
    <Advantages/>
    <Directory data={data} title="Автотовары: аксессуары, 
    расходники и многое другое" subtitle="PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. "/>
    <Services/>
    <Info/>
    <News data={newsData}/>
    <Partners autoPlay={true} toShow={5} elemets={partnersData} />
    </>
  )
}

export default HomePage