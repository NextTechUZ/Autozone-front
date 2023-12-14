import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import Partners from '../Partners'
import Button from '../../Button'
 const partnersData=[
    {
        id: 1,
        name:"Сергей ",
        img: require("../../../img/reviews1.jpg"),
        width: "174",
        height: "168",
        clientInfo:"Частный клиент",
        text:"Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!"
      },
      {
        id: 2,
        name:"Сергей ",
        img: require("../../../img/reviews1.jpg"),
        width: "174",
        height: "168",
        clientInfo:"Частный клиент",
        text:"Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!"
      },
 ]

function Reviews() {
    return (
        <section className={styles.reviews}>
            <div  className={styles.reviews__container}>
                <Title  outline text="Для нас ценно любое Ваше мнение." children={"ОТЗЫВЫ"}/>
                <Partners elements={partnersData} autoPlay={false} toShow={1}/>
               <div className={styles["reviews__button-wrapper"]}>
               <Button   style={{color:"#C53720"}} value="ОСТАВИТЬ СВОЙ ОТЗЫВ"/>
               </div>
            </div>
        </section>
    )
}

export default Reviews
