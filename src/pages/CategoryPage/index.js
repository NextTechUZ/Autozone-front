import React from "react";

import Directory from "../../components/section/Directory";
import Showcase from "../../components/section/Showcase";
import ShowcaseImg1 from "../../img/showcaseBg1.png";
import ShowcaseImg2 from "../../img/showcaseBg2.png";
import ShowcaseImg3 from "../../img/showcaseBg3.png";
import Navigation from "../../components/Navigation";

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
function CategoryPage() {
  return (
    <div className="">
      <Showcase titleMargin="0 0 3rem" data={showcaseDAta} />
      <Navigation />
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
