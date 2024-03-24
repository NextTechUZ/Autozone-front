import React, { useEffect } from 'react'
import Showcase from '../../components/section/Showcase'
import NavigationStatus from '../../components/section/NavigationStatus'
import Title from '../../components/Title'
import styles from './index.module.scss'
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
  name: "НОВОСТИ",
  to: "/news"
},
]
export default function NewsPage() {
  
  return (
    <div>
        <Showcase data={showcaseData}/>
        <NavigationStatus data={navData } />
        <section className={styles["news-page__section"]}>
         <div className='container'>
         <Title color='black' outline children="НОВОСТИ" text='Следите за новостями AutoZone Shop'/>
          <div className={styles['news-page__intro']}>
          </div>
           <div className={styles['news-page__status-wrapper']}>
            <p className={styles['news-page__status-date']}>24 февраля 2020 года</p>
             <p className={styles['news-page__status-text']}>Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается. Так и со щётками - не заменим, пока совсем не потеряем возможность видеть перед собой из-за грязного лобового стекла. Следите за своими щётками и меняйте их каждый сезон, ведь безопасность на дороге превыше всего!</p>
           </div>
         </div>
        </section>
        <Faq/>
    </div>
  )
}
