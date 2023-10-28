import React, { useEffect, useState } from 'react'
import Button from '../../Button/index';
import styles from"./style.module.scss"
import FactoryCard from '../../FactoryCard';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { myAxios } from '../../../utils/myAxios';
export default function CatalogMain({
    width="100%",
    cardWidth="33%",
    height="100%",
    maxHeight="100%"
}) {

    let [state,setState]=useState()
    useEffect(()=>{
        setState(backend()[1].incloud[0].incloud)
    },[])
    let {search}=useLocation()
    let menuListPage=new URLSearchParams(search).get("page")
    let menuListId=new URLSearchParams(search).get("itemId")
    let {data,isloading,iserror}=useQuery(menuListPage,()=>myAxios(`"peoduct?"${menuListPage}=${menuListId}`))
  return (
    <div className={styles.Right}
    style={{width,height,maxHeight}}>
        {
            state?.map((item,index)=><FactoryCard key={index} item={item}/>)
        }
    </div>
  ) 
}

export function backend(){
    return [
        {
            id:"1",
            title:"КОМПАНИЯ",
    
        },
        
        {
            id:"2",
            title:"КАТАЛОГ",
            incloud:[
                {
                    id:"1",
                    title:"АККУМУЛЯТОРЫ",
                    incloud:[
                        {
                            id:"1",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"2",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"3",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ»Казахстан Компания «Кайнар – АКБ», КазахстанКазахстан Компания «Кайнар – АКБ»Казахстан Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"4",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"3",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:" АКБ»Казахстан Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"4",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"3",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:" АКБ»Казахстан Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"4",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"3",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:" АКБ»Казахстан Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                        {
                            id:"4",
                            title:"АКБ MAGNUM",
                            img:"",
                            about:"Компания «Кайнар – АКБ», Казахстан",
                            incloud:[
                                {
                                    id:"1",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"2",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                                {
                                    id:"3",
                                    title:"MAGNUM 60Ah",
                                    img:"",
                                    oldPrice:"2199 руб.",
                                    price:"2199 руб.",
                                    discribe:"Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом",
                                    character:[
                                        {
                                            title:"Емкость, Ач",
                                            incloud:"60"
                                        },
                                        {
                                            title:"Пусковой ток, А",
                                            incloud:"500"
                                        },
                                        {
                                            title:"Полярность",
                                            incloud:"Прямая/Обратная"
                                        },
                                        {
                                            title:"Pазмеры (ДхШхВ), мм",
                                            incloud:"242х175х190"
                                        },
                                        {
                                            title:"Производитель, мм",
                                            incloud:"Magnum"
                                        },
                                        {
                                            title:"Bес, кг",
                                            incloud:"14.5"
                                        }
                                    ],
                                    have:"В НАЛИЧИИ"
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id:"3",
            title:"УСЛУГИ",
    
        },
        {
            id:"4",
            title:"ИНФОРМАЦИЯ",
    
        },
        {
            id:"5",
            title:"КОНТАКТЫ",
    
        },
    ]
  }
  