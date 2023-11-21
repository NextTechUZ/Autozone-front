import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import NewsCard from '../../newsCard'
import Button from '../../Button'

function News({data}) {
    return (
        <section className={styles.news}>
          <div className='container'>
          <div className={styles.news__container}>
            <Title outline color={"black"} children={"новости"}/>
            <ul className={styles.news__list}>
                {
                    data.map((el)=>
                    <NewsCard key={el.id}to={el.link} date={el.date} img={el.img} text={el.text}/>
                    )
                }

            </ul>
            <div className={styles["news__button-wrapper"]}> <Button color="rgba(197, 55, 32, 1)" value="ЧИТАТЬ ВСЕ НОВОСТИ" /></div>
            </div>
          </div>
        </section>
    )
}

export default News
