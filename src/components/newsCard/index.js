import React from 'react'
import styles from '../section/News/index.module.scss'

function NewsCard({date,img,text,to}) {
    return (
        <li className={styles.news__item}>
                    <img width="360" height="284" src={img}></img>
                    <p className={styles.news__date}>{date}</p>
                    <p className={styles.news__text}>{text}</p>
                    <button className={styles.news__button}><svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z" fill="#C53720"/>
                    </svg>
                    </button>
        </li>
    )
}

export default NewsCard
