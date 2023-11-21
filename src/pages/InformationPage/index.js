import React from 'react'
import Showcase from '../../components/section/Showcase'
import NavigationStatus from '../../components/section/NavigationStatus'
import NewsSection from '../../components/section/NewsSection'
import Faq from '../../components/section/FAQ'
const showcaseData=[
    {
        id: 1,
        bgImg: require("../../img/info-intro.png"),
        title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
        buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
    }
]
const navData = [{
    id: 1,
    name: "ГЛАВНАЯ",
    to: "/"
},
{
    id: 2,
    name: "ИНФОРМАЦИЯ",
    to: "/info"
},
]
function InformationPage() {
    return (
    <>
  <Showcase data={showcaseData} />
  <NavigationStatus data={navData } />
  <NewsSection/>
  <Faq/>
    </>
    )
}

export default InformationPage
