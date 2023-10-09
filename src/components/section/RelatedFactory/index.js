import React from 'react'
import styles from './index.module.scss'
import Title from '../../Title'
import FactoryCard from '../../FactoryCard'
export default function RelatedFactory() {
    let windowWidth=window.innerWidth
  return (
    <div className={styles.related_factory} style={{margin:"4rem 0"}}>
        <div className='container'>
            <Title textAlign="left">Related products</Title>
            <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
                {
                    backend()[1].incloud[0].incloud.slice(0,4)?.map((item,index)=><FactoryCard key={index} item={item} width={windowWidth<576 ? "45%" :"23%"}/>)
                }
            </div>
        </div>

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
