import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import NewsCard from '../../newsCard'
import { newsData } from '../../../store/store'


function News() {
    return (
        <section className={styles.news}>
          <div className='container'>
          <div className={styles.news__container}>
            <Title outline color={"black"} children={"новости"}/>
            <ul className={styles.news__list}>
                {
                    newsData.map((el)=>
                    <NewsCard key={el.id}to={el.link} date={el.date} img={el.img} text={el.text}/>
                    )
                }

            </ul>
            <button >ЧИТАТЬ ВСЕ НОВОСТИ</button>
            </div>
          </div>
        </section>
    )
}

export default News
