import React from 'react'
import styles from './index.module.scss'
function Advantages() {
    return (   
        <section className={styles.advantages}>
            <div className='container'>
                <div className={styles.advantages__container}>
                    <ul className={styles.advantages__list}>
                        <li className={styles.advantages__item}>
                        Наличный и безналичный расчет
                        </li>
                        <li className={styles.advantages__item}>
                        Техническая помощь и консультация
                        </li>
                        <li className={styles.advantages__item}>
                        Только качественная и проверенная продукция
                        </li>
                        <li className={styles.advantages__item}>
                        Мы всегда на связи
                        с 9:00 до 18:00!
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Advantages
