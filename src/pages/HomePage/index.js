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

import {
  newsData, showcaseData
} from '../../store/store'
import Showcase from '../../components/section/Showcase'
import Title from '../../components/Title'


const partnersData = [
  {
    id: 1,
    img: require("../../img/partne1.png"),
    width: "166",
    height: "52"
  },
  {
    id: 2,
    img: require("../../img/partne2.png"),
    width: "166",
    height: "48"
  },
  {
    id: 3,
    img: require("../../img/partne3.png"),
    width: "166",
    height: "25"
  },
  {
    id: 4,
    img: require("../../img/partne4.png"),
    width: "165",
    height: "45"
  },
  {
    id: 5,
    img: require("../../img/partne5.png"),
    width: "105",
    height: "90"
  },
  {
    id: 6,
    img: require("../../img/partne4.png"),
    width: "165",
    height: "45"
  },
  {
    id: 7,
    img: require("../../img/partne5.png"),
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

  
  return (
    <>
    <Showcase data={showcaseData}/> 
    <Advantages/>
    <Directory  title="Автотовары: аксессуары, 
    расходники и многое другое" subtitle="AutoZone – это магазин по продаже автозапчастей для автомобилей. "/>
    <Services/>
    <Info button={true} text={"Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров."}/>
    <section className="container">
    <Title outline color={"black"} children={"новости"}/>
    <News data={newsData}/>
    </section>
  
    <Partners autoPlay={true} toShow={toShow} elements={partnersData} />
    </>
  )
}

export default HomePage