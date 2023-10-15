import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import NewsCard from '../../newsCard'
import Button from '../../Button'

const buttonData={
  width:"168px",
  color: "#C53720",
  backgroundColor:"transparent",
  value:"ЧИТАТЬ ВСЕ НОВОСТИ",
  link:"/",

}
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
            <div className={styles["news__button-wrapper"]}> <Button prop={buttonData} /></div>
            </div>
          </div>
        </section>
    )
}

export default News
