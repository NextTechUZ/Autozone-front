import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

import Directory from "../../components/section/Directory";
import Showcase from "../../components/section/Showcase";
import Navigation from "../../components/Navigation";
import { showcaseData } from "../../store/store";
import { useQuery } from "react-query";
 import {myAxios} from "../../utils/myAxios"

function CategoryPage() {
  useEffect(()=>{
    window.scrollTo(0,450)
  },[])
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
  const {data}= useQuery("category",()=> myAxios.get('category'),{
    select:el =>{return {...el?.data.data,url:el.config.url}}
  })
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
