import React from 'react'
import styles from '../section/News/index.module.scss'

function NewsCard({date,img,text,to}) {
    return (
        <li className={styles.news__item}>
                    <img width="360" height="284" src={img}></img>
                    <p className={styles.news__date}>{date}</p>
                    <p className={styles.news__text}>{text}</p>
                    <button className={styles.news__button}></button>
        </li>
    )
}

export default NewsCard
