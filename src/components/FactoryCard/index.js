import React from 'react'
import Button from '../Button'
import styles from './index.module.scss'
export default function FactoryCard({
    key="",
    width,
    minheight="4rem",
    img=require("../../img/magnum 1.png"),
    item="",
    margin
}) {
  return (
    <div className={styles.card} key={key} style={{width,margin}}>
        <div className={styles.image_sector}>
            <img src={img} style={{objectFit:"scale-down",background:"var(--color-white)"}}/>
        </div>
        <div className={styles.des_sector} style={{height:'40%'}}>
            <div className={styles.info}>
                <div className={styles.title} style={{fontSize:"1.6rem",fontWeight:"400"}}>{item.title}</div>
                <div className={styles.describtion} style={{fontSize:"1.2rem",fontWeight:"800"}}>
                    {Number(item.about?.length)<100?item?.about:item.about?.slice(0,70)+" . . ."}
                </div>
            </div>
            <div className={styles.btn_sector}>
                <Button justifyContent='left'>ПОДРОБНЕЕ</Button>
            </div>  
        </div>
    </div>
  )
}
