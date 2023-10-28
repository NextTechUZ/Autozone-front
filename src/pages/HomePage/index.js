import React, {
  useEffect,
  useState
} from 'react'

import Advantages from '../../components/section/Advantages'
import Services from '../../components/section/ServiceSection'
import Info from '../../components/section/Info'
import News from '../../components/section/News'
import Partners from '../../components/section/Partners'
import Directory from '../../components/section/Directory'
import Showcase from '../../components/section/Showcase'
import { showcaseData } from "../../store/store";
import ShowcaseImg1 from "../../img/showcaseBg1.png";
import ShowcaseImg2 from "../../img/showcaseBg2.png";
import ShowcaseImg3 from "../../img/showcaseBg3.png";
import part1 from "../../img/partne1.png";
import part2 from "../../img/partne2.png"
import part3 from "../../img/partne3.png"
import part4 from "../../img/partne4.png"
import part5 from "../../img/partne5.png"
import { useQuery } from 'react-query'
import { FetchData, fetchData } from '../../hook/fetchAxios'
import { myAxios } from '../../utils/myAxios'

const partnersData = [{
    id: 1,
    img: part1,
    width: "166",
    height: "52"
  },
  {
    id: 2,
    img: part2,
    width: "166",
    height: "48"
  },
  {
    id: 3,
    img: part3,
    width: "166",
    height: "25"
  },
  {
    id: 4,
    img: part4,
    width: "165",
    height: "45"
  },
  {
    id: 5,
    img: part5,
    width: "105",
    height: "90"
  },
  {
    id: 6,
    img: part4,
    width: "165",
    height: "45"
  },
  {
    id: 7,
    img: part5,
    width: "105",
    height: "90"
  }
]

function HomePage() {
  const [toShow, setShow] = useState(5)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResizeWindow = () => setWindowSize(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };

  }, [])
  useEffect(() => {
    if (windowSize <= 1150) {
      setShow(4)
    } else {
      setShow(5)
    }
    if (windowSize <= 930) {
      setShow(3)
    }
    if (windowSize <= 700) {
      setShow(2)
    }
    if (windowSize <= 550) {
      setShow(1)
    }
  }, [windowSize])

  const {data:categoryData}= useQuery("category",()=>myAxios("/category"),{
    select:el =>{return {...el?.data.data,url:el.config.url}}
  })
  const {data:newsData}= useQuery("new",()=>myAxios("/news"),{
    select:(el)=>el.data.data
  })
  return (
    <>
    <Showcase data={showcaseData} />
    <Advantages/>
    <Directory data={categoryData} title="Автотовары: аксессуары, 
    расходники и многое другое" subtitle="PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. "/>
    <Services/>
    <Info/>
    <News data={newsData}/>
    <Partners autoPlay={true} toShow={toShow} elemets={partnersData} />
    </>
  )
}

export default HomePage