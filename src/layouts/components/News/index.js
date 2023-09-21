import React from 'react'
import styles from './index.module.scss'
import Title from '../Title/index'
function News() {
    return (
        <section className={styles.news}>
          <div className='container'>
          <div className={styles.news__container}>
            <Title color={"black"} title={"новости"}/>
            <ul className={styles.news__list}>
                <li className={styles.news__item}>
                    <img width="360" height="284" src={require("../../../img/news1.jpg")}></img>
                    <p className={styles.news__date}>12 февраля 2020 года</p>
                    <p className={styles.news__text}>У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!</p>
                    <button className={styles.news__button}><svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z" fill="#C53720"/>
                    </svg>
                    </button>
                </li>
                <li className={styles.news__item}>
                    <img width="360" height="284" src={require("../../../img/news2.jpg")}></img>
                    <p className={styles.news__date}>10 февраля 2020 года</p>
                    <p className={styles.news__text}>ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA </p>
                    <button className={styles.news__button}><svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z" fill="#C53720"/>
                    </svg>
                    </button>
                </li>
                <li className={styles.news__item}>
                    <img width="360" height="284" src={require("../../../img/news3.jpg")}></img>
                    <p className={styles.news__date}>5 февраля 2020 года</p>
                    <p className={styles.news__text}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE</p>
                    <button className={styles.news__button}><svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z" fill="#C53720"/>
                    </svg>
                    </button>
                </li>
            </ul>
            <button >ЧИТАТЬ ВСЕ НОВОСТИ</button>
            </div>
          </div>
        </section>
    )
}

export default News
