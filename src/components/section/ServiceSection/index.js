import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import Subtitle from '../../Subtitle'


function Services() {
    return (
        <>
        <section className={styles.services}>
        <div className={styles.services__gradient}>
        <div className='container'>
        <div className={styles.services__container}>
          <Title color={"white"} outline children={"услуги"} />
          <Subtitle align={"center"} children="Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции." color='white' />
          <ul className={styles.services__list}>
            <li className={styles.services__item}>
                <h3 className={styles.services__item__title}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</h3>
                <p className={styles.services__item__text}>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </p>
            </li>
            <li className={styles.services__item}>
                <h3 className={styles.services__item__title}>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</h3>
                <p className={styles.services__item__text}>Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</p>
            </li>
            <li className={styles.services__item}>
                <h3 className={styles.services__item__title}>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</h3>
                <p className={styles.services__item__text}>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</p>
            </li>
          </ul>
          <button>ЗАДАТЬ ВОПРОС</button>
        </div>
        </div>     
        </div>
        </section>
        </>
    )
}

export default Services
