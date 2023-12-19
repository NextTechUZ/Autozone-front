import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import styles from "./index.module.scss"
export default function Produc() {
    let [state,setState]=useState()
    useEffect(()=>{
        let data =JSON.parse(localStorage.getItem("catalogPraduct"))
        setState(data)
    },[])
    console.log(state);
  return (
    <div className={styles.product_section}>
        <div className={styles.product_card}>
            <div className='container'>
                <Title textAlign="left">
                    {state?.title}
                </Title>
                <div style={{display:"flex",marginTop:"3rem"}}>
                    <div className={styles.produc_image_box}>
                        <img src={require("../../img/acumlator.png")} style={{width:"60%"}}/>
                    </div>
                    <div className={styles.produc_des_box}>
                        <p style={{fontSize:"2.4rem"}}>Коротко о товаре</p>
                        {
                            state?.describe.map((item,index)=><div key={index}className={styles.produc_des}>
                                <div style={{color:"rgba(153, 153, 170, 1)",width:"50%"}}>{item.title}</div>
                                <div>{item.main}</div>
                            </div>)
                        }
                        <p  style={{fontSize:"1.6rem",paddingTop:"1rem",color:"var(--color-brand--1)",textDecoration:"underline"}}>Подробнее</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
