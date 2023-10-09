import React from 'react'
import Button from '../Button'
import styles from './index.module.scss'
export default function FactoryCard({
    key="",
    width="33%",
    minheight="4rem",
    img="",
    item=""
}) {
  return (
    <div className={styles.card} key={key} style={{width}}>
        <div className={styles.image_sector}>
            <img src={require("../../img/magnum 1.png")} style={{objectFit:"scale-down",background:"var(--color-white)"}}/>
        </div>
        <div className={styles.des_sector}>
            <div className={styles.info}>
                <div className={styles.title} style={{fontSize:"1.6rem",fontWeight:"400"}}>{item.title}</div>
                <div className={styles.describtion} style={{fontSize:"1.2rem",fontWeight:"800"}}>
                    {Number(item.about?.length)<200?item?.about:item.about?.slice(0,170)+" . . ."}
                </div>
            </div>
            <div className={styles.btn_sector}>
                <Button value="ПОДРОБНЕЕ"/>
            </div>  
        </div>
    </div>
  )
}
