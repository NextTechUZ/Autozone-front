import React from "react";

import styles from "./index.module.scss";

import Directory from "../../components/section/Directory";
import Showcase from "../../components/section/Showcase";
import ShowcaseImg1 from "../../img/showcaseBg1.png";
import Navigation from "../../components/Navigation";
import { showcaseData } from "../../store/store";

function CategoryPage() {
  let navigationBar=[
    {
      title:"ГЛАВНАЯ",
      link:"/"
    },
    {
      title:"КАТАЛОГ",
      link:"/category"
    }
  ]
  return (
    <div className={styles["category-page"]}>
      <Showcase data={showcaseData} />
      <Navigation pathUrl={navigationBar}/>
      <Directory
        subtitle="Мы предлагаем лучшие цены на продукцию!"
        title="КАТАЛОГ"
        data={data}
      />
    </div>
  );
}

export default CategoryPage;

export const data = [
  {
    id: 1,
    imgUrl: ShowcaseImg1,
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 2,
    imgUrl: ShowcaseImg1,

    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 3,
    imgUrl: ShowcaseImg1,

    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 4,
    imgUrl: ShowcaseImg1,

    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 5,
    imgUrl: ShowcaseImg1,

    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 6,
    imgUrl: ShowcaseImg1,
    title: "АККУМУЛЯТОРЫ",
  },
];
