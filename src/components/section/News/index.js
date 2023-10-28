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
        <section className={styles.news+" "+"news"}>
          <div className='container'>
          <div className={styles.news__container}>
            <Title outline color={"black"} children={"новости"} margin='0 0 2rem 0'/>
            {
              isopen?<div>
                <ul className={styles.news__list}>
                    {
                        data?.news?.slice(0,data.result >= 3 ?3:data.result).map((el)=>
                        <NewsCard key={el.id} date={el.created} img={el.image} text={el.description}/>
                        )
                    } 
                </ul>
                <div className={styles["news__button-wrapper"]}>
                  <Button color='var(--color-brand--1)' onClick={()=>{SetIsOpen(false)}}>ЧИТАТЬ ВСЕ НОВОСТИ</Button></div>
              </div>:
              <Slider style={{marginTop:"4rem"}}>
                {
                    data?.news?.map((el)=>(
                    <div className={styles.news_wrapper} key={el.id}>
                      <img src={el.image}/>
                      <div className={styles.news_wrapper_date}>{el.created}</div>
                      <div className={styles.news_wrapper_desc}>{el.description}</div>
                    </div>)
                    )
                } 
            </Slider>
            }
          </div> 
          </div>
        </section>
    )
}

export default News
