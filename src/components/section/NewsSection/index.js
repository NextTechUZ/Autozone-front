import React from 'react';
import styles from './index.module.scss'
import Title from '../../Title';
import Button from '../../Button';
import News from '../News';
import { newsData } from '../../../store/store';

function NewsSection() {
    return (
        <section className={styles.news}>
         <div className='container'>
           <Title color='black' outline children="НОВОСТИ" text='Следите за новостями Pro auto'/>
            <div className={styles.news__info}>
                <div className={styles["news__info-text-wrapper"]}>
                    <p className={styles["news__info-date"]}>24 февраля 2020 года</p>
                    <h3 className={styles["news__info-title"]}>МЫ ОБНОВИЛИСЬ. ТЕПЕРЬ У НАС НОВЫЙ ЛОГОТИП И ОБНОВЛЕННЫЙ САЙТ.</h3>
                    <p className={styles["news__info-text"]}>Мы рады ононсировать наш обновленный внешний мир. Мы не стоим на месте, постоянно развиваемся и улучшаем качество наших услуг, а также следим и за своим внешним видом.</p>
                    <Button   style={{color:"#fff"}}  value="ЧИТАТЬ ПОДРОБНЕЕ"/>
                </div>
            </div>
            <News data={newsData}/>
         </div>
        </section>
    )
}

export default NewsSection
