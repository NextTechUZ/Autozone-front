import React, { useState } from 'react'
import styles from './index.module.scss'
import "./index.scss"
import Title from '../../Title'
import NewsCard from '../../newsCard'
import Button from '../../Button'
import Slider from 'react-slick'

function News({data}) {
  let [isopen,SetIsOpen]=useState(true)
    return (
        <>
            <ul className={styles.news__list}>
                {
                    data?.news?.map((el)=>(
                    <div className={styles.news_wrapper} key={el.id}>
                      <img src={el.image}/>
                      <div className={styles.news_wrapper_date}>{el.created}</div>
                      <div className={styles.news_wrapper_desc}>{el.description}</div>
                    </div>)
                    )
                }
            </ul>
            <div className={styles["news__button-wrapper"]}> 
            <Button  style={{color:"rgba(197, 55, 32, 1)"}}  to='/ask-question' value="ЧИТАТЬ ВСЕ НОВОСТИ" />
            </div>
          </>
    )
}

export default News
