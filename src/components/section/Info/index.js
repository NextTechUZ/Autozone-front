import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import Button from '../../Button'

function Info({text,button}) {
   if (button) {
    return (
      <section className={styles.info}>
          <div className={styles.info__gradient}>
             <div className='container'>
             <div className={styles.info__container}>
              <Title outline children={"о компании"} color={"white"}/>
              <div className={styles.info__wrapper}>
                  <div className={styles.info__img__wrapper}>
                  </div>
                  <div className={styles["info__text-wrapper"]}>
                      <p className={styles.info__text}>{text}</p>
                    <div className={styles["info__button-wrapper"]}> <Button  style={{color:"#fff"}} value="УЗНАТЬ БОЛЬШЕ" /></div>
                  </div>
              </div>
             </div>
             </div>
          </div>
      </section>
  )
   }
   return(
 <section className={styles.info}>
  <div className={styles.info__gradient}>
    <div className='container'>
    <div className={styles.info__container}>
    <Title outline children={"о компании"} color={"white"}/>
    <div className={styles.info__recwrapper}>
    <div className={styles["info__text-wrapper"]}>
                      <p className={styles.info__text}>{text}</p>
     </div>
     <ul className={styles.info__reclist}>
      <li className={styles.info__item}>
         <img className={styles["info__item-img"]} width={"84"} height={"112"} src={require("../../../img/inforec1.png")}></img>
         <p className={styles["info__rectext"]}>Реквизиты</p>
      </li>
      <li className={styles.info__item}>
         <img className={styles["info__item-img"]} width={"92"} height={"84"} src={require("../../../img/inforec2.png")}></img>
         <p className={styles["info__rectext"]}>Задать вопрос</p>
      </li>
      </ul>            
      </div>     
    </div>
    </div>
    </div>
 </section>
    )
}

export default Info
