import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
function Licenses({data}) {
    return (
        <section className={styles.licenses}>
            <div className='container'>
            <div className={styles.licenses__container}>
             <Title textAlign='center' outline children={"ЛИЦЕНЗИИ"}/>
             <ul className={styles.licenses__list}>
                {data.map((el)=>
                <li key={el.id} className={el.sertificate?styles['licenses__item--active']:styles.licenses__item}>
                    <img className={styles.licenses.img} width="168" height="234" src={el.image}></img>
                     <p className={styles["licenses__item-text"]}>{el.text}</p>
                </li>)}
             </ul>
           </div>
            </div>
        </section>
    )
}

export default Licenses
