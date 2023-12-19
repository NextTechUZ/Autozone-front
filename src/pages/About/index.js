import Navigation from "../../components/Navigation";
import BePartner from "../../components/section/BePartner";
import Company from "../../components/section/Company";
import License from "../../components/section/License";
import Reviews from "../../components/section/Reviews";
import Showcase from "../../components/section/Showcase";
import { showcaseData } from "../../store/store";
import styles from "./index.module.scss";
import profileImg from "../../img/info-per.jpg"
import { useEffect } from "react";
function About() {
  useEffect(()=>{
    window.scrollTo(0,450)
  },[])
  let reviewsData=[
    {
      id:"1",
      name:"Сергей",
      type:"Частный клиент",
      describe:"Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!",
      Personimg:profileImg
    },
    {
      id:"2",
      name:"Сергей 2",
      type:"Частный клиент",
      describe:"Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!",
      Personimg:profileImg
    },
    {
      id:"3",
      name:"Сергей 3",
      type:"Частный клиент",
      describe:"Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!",
      Personimg:profileImg
    },
  ]
  let navigationBar=[
    {
      title:"ГЛАВНАЯ",
      link:"/"
    },
    {
      title:"О КОМПАНИИ",
      link:"/about"
    }
  ]
  return (
    <>
      <Showcase data={showcaseData} />
      <Navigation pathUrl={navigationBar}/>
      <Company />
      <License />
      <BePartner />
      <Reviews elemets={reviewsData} autoPlay={true}/>
    </>
  );
}

export default About;
