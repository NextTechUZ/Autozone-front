import React from 'react'
import styles from './index.module.scss'
import Title from '../Title/index'
function Info() {
    return (
        <section className={styles.info}>
            <div className={styles.info__gradient}>
               <div className='container'>
               <div className={styles.info__container}>
                <Title title={"о компании"} color={"white"}/>
                <div className={styles.info__wrapper}>
                    <div className={styles.info__img__wrapper}>
                      {/* <img className={styles.info__img} width={"360"} height={"347"} src={require("../../../img/info-per.jpg")}></img> */}
                    </div>
                    <div className={styles.info__text__wrapper}>
                        <p className={styles.info__text}>Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в 
                      «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией 
                      и аксессуаров.</p>
                      <button >УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
               </div>
               </div>
            </div>
        </section>
    )
}

export default Info
