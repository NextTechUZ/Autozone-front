import React from "react";

import Directory from "../../components/section/Directory";
import Loader from "../../components/Loader" 
import NavigationStatus from "../../components/section/NavigationStatus";
import Showcase from "../../components/section/Showcase";
import ShowcaseImg1 from "../../img/showcaseBg1.png";
import ShowcaseImg2 from "../../img/showcaseBg2.png";
import ShowcaseImg3 from "../../img/showcaseBg3.png";
import { getData } from "../../services/useApi";
import { PRODUCT, api } from "../../store/axios";
import { useQuery } from "react-query";
import styles from './index.module.scss'

const navData = [{
  id: 1,
  name: "ГЛАВНАЯ",
  to: "/"
},
{
  id: 2,
  name: "КАТАЛОГ",
  to: "/category"
}
]
const showcaseDAta = [
  {
    id: 1,
    bgImg: require("../../img/showcaseBg1.png"),
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

function CategoryPage() {

  async function category(){ 
    const data = await getData(PRODUCT.category)
    return await data.data.categories
     }

   const {isLoading,data}=useQuery("data",category)
   console.log(isLoading);
  return (
    <>
      <Showcase titleMargin="0 0 3rem" data={showcaseDAta} />
      <NavigationStatus  data={navData}/>
      {isLoading?<Loader/>:
      <Directory
        subtitle="Мы предлагаем лучшие цены на продукцию!"
        title="КАТАЛОГ"
        data={data}
      />
  }
    </>
  );
}

export default CategoryPage;

export const data = [
  {
    id: 1,
    imgUrl:require("../../img/dir1.jpg"),
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 2,
    imgUrl:require("../../img/dir2.jpg"),
    title: "АВТОМАСЛА",
  },
  {
    id: 3,
    imgUrl:require("../../img/dir3.jpg"),
    title: "АВТОКОСМЕТИКА",
  },
  {
    id: 4,
    imgUrl:require("../../img/dir4.jpg"),
    title: "Автоаксессуары",
  },
  {
    id: 5,
    imgUrl:require("../../img/dir5.jpg"),
    title: "АВТОХИМИЯ",
  },
  {
    id: 6,
    imgUrl:require("../../img/dir6.jpg"),
    title: "РАСХОДНИКИ",
  },
];
