import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';

function NavigationStatus({data}) {
    return (
    <>
        <section className={styles['navigation-status']}>
            <div className='container'>
                <ul className={styles['navigation-status__list']}>
                    {data.map((el)=><li key={el.id} className={styles["navigation-status__item"]}>
                        <Link children={el.name} to={el.to} className={styles["navigation-status__link"]} />
                    </li>)}
                </ul>
            </div>
        </section>
    </>
    )
}

export default NavigationStatus