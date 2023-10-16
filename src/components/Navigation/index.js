import React from 'react'
import style from"./style.module.scss"
import { Link, useLocation } from 'react-router-dom'
export default function Navigation({
  pathUrl
}) {
  return (
    <div className={style.navigation__comp}>
        <div className={`container ${style.navigation__card}`}>
            {
              pathUrl?.map((item,index)=><div key={index} style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
                <Link to={"/"+ `${item.title=="Home"?"":item.link}`}>
                  <p className={style.pathname +" "+ style.item} style={index == 0? {color:"var(--color-brand--1)"} : {color:"var(--color-brand--2)"}}>{item.title}</p>
                </Link>
                {
                  index != pathUrl.length-1 ? <svg className={style.item} width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L12 10L8 16" stroke="var(--color-brand--1)" stroke-width="4"/>
                  </svg>
                   : ""
                }
              </div>)
            }
        </div>
    </div>
  )
}
