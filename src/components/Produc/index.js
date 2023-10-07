import React, { useState } from 'react'
import Title from '../../components/Title'
import styles from "./index.module.scss"
export default function Produc() {
    let [state]=useState([
        {
            title:"Материал рабочей поверхности",
            main:"Закаленное стекло"},
        {
            title:"Тип духовки",
            main:"Газовая"
        },
        {
            title:"Объем духовки",
            main:"52 л"
        },
        {
            title:"Гриль",
            main:"Газовый"
        },
        {
            title:"Управление",
            main:"Механическое"
        },
        {
            title:"Газ-контроль",
            main:"Конфорок, духовки"
        },
        {
            title:"ШхВхГ",
            main:"60х85х60 см"
        }
    ])
  return (
        <div className={styles.product_card}>
            <div className='container'>
                <Title textAlign="left">Газовая плита GEFEST 6500-03 0044, черный</Title>
                <div style={{display:"flex",marginTop:"3rem"}}>
                    <div className={styles.produc_image_box}>
                        <img src={require("../../img/acumlator.png")} style={{width:"60%"}}/>
                    </div>
                    <div className={styles.produc_des_box}>
                        <p style={{fontSize:"2.4rem"}}>Коротко о товаре</p>
                        {
                            state.map((item,index)=><div key={index}className={styles.produc_des}>
                                <div style={{color:"rgba(153, 153, 170, 1)",width:"50%"}}>{item.title}</div>
                                <div>{item.main}</div>
                            </div>)
                        }
                        <p  style={{fontSize:"1.6rem",paddingTop:"1rem",color:"var(--color-brand--1)",textDecoration:"underline"}}>Подробнее</p>
                    </div>
                </div>
            </div>
        </div>
        
  )
}
