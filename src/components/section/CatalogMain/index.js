import React from 'react'
import Button from '../../Button/index';
import styles from"./style.module.scss"
import img from "../../../img/magnum 1.png"
export default function CatalogMain() {
  return (
    <div className={styles.Right}>
        {
            backend()[1].incloud[0].incloud?.map((item,index)=><div className={styles.card} key={index}>
                <div className={styles.image_sector}>
                    <img src={img}/>
                </div>
                <div className={styles.des_sector}>
                    <div className={styles.info}>
                        <div className={styles.title} style={{fontSize:"1.6rem",fontWeight:"400"}}>{item.title}</div>
                        <div className={styles.describtion} style={{fontSize:"1.2rem",fontWeight:"800"}}>
                            {Number(item.about.length)<200?item.about:item.about.slice(0,170)+" . . ."}
                        </div>
                    </div>
                    <div className={styles.btn_sector}>
                        {/* <Button value="ПОДРОБНЕЕ"/> */}
                    </div>
                </div>
            </div>)
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
                            id:"3",
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
  