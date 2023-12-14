import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import Button from '../../Button'
 const buttonData={
    
  }
function Sponsors({data}) {
    return (
        <section id='partners' className={styles.sponsors}>
         <div className={styles.sponsors__gradient}>
         <div className="container">
            <div className={styles.sponsors__container}>
                <Title color='#fff' children="ПАРТНЕРЫ" outline textAlign='center'/>
                <ul className={styles.sponsors__list}>
                    {data.map((el)=><li key={el.id} className={styles.sponsors__item}>
                        <img className={styles["sponsors__item-img"]} src={el.img} width="184" height="184"></img>
                         <p className={styles["sponsors__item-text"]}>{el.text}</p>
                    </li>)}
                </ul>            
                   <div className={styles.sponsors__button}>
                   <Button  style={{color:"#fff"}} value="СТАТЬ ПАРТНЕРОМ" to="/" />
                   </div>
            </div>
        </div>
         </div>
        </section>
    )
}

export default Sponsors
