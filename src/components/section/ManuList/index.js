import React, { useEffect, useReducer } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from"./style.module.scss"
import Button from '../../Button/index';
import PriceRange from '../../Range/index';


export const reduser=(state,action)=>{

    let {payload}=action
    switch (action.type) {
        case "GET_BACKEND":
            return {...state,...payload}    
        case "CHANGE_ISOPEN":
            return { ...state, incloud: payload }   
        case "CHANGE_ISOPEN_FILTER":
            return { ...state, isopen: payload }   
        case "SET_FILTER":
            let {filter}={...state}
            filter.del=false
            filter={...filter,...payload}
            return {...state,filter}
        case "DEL_FILTER":
            return {...state,filter:{del:true}}
        default:
            break;
    }
}
export default function ManuList(){
  useEffect(() => {
    backend().filter(e => {
      if (Number(e.id) == 2) {
        let store = e.incloud[0].incloud.map((item, index) => {
          return { ...item, open: false }
        })
        let newStore={ ...e.incloud[0], incloud: store }
        dispatch({type:"GET_BACKEND",payload:newStore})
      }
    })
  }, [])
  const [state, dispatch] = useReducer(reduser,{
    isopen:{
      status:true,
      price:true,
    },
    filter:{
        submit:false,
        del:false
    }
  });

  const handleClick = (id) => {
    let isopen = state.incloud.map((item) => item.id == id?{ ...item, open: !item.open }:item)
    dispatch({type:"CHANGE_ISOPEN",payload:isopen})
  };
  const showvalue=(prop)=>{
    if(state.filter.submit){
        dispatch({type:"SET_FILTER",payload:prop})
    }
  }

  const setPriceRenge=()=>{
    if((state.filter.del==undefined)||(state.filter.del)){
        return {min:0,max:10000}
    }
  }

  return (
    <div className={styles.left}>
      <List
        sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper', display: "block", padding: "0px", color: "white"}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          style={{ backgroundColor: "#C53720" }}
          >
          <ListItemText primary={state.title}/>
          <ExpandMore />
        </ListItemButton>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              state.incloud?.map((item, index) => {
                return <div key={index}><ListItemButton
                  style={item.open ? { backgroundColor: "#1D1D1D" } : { backgroundColor: "black" }}
                  onClick={() => {
                    handleClick(item.id)
                  }
                  }>
                  <ListItemText primary={item.title} />
                  {item.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                  <Collapse in={item.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {
                        item.incloud.map((item, index) => {
                          return <ListItemButton key={index} style={{ backgroundColor: "#2D2D2D" }}>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        })
                      }
                    </List>
                  </Collapse>
                </div>
              }
              )
            }
          </List>
        </Collapse>

      </List>
      <div className={styles.filter_comp}>
        <List
          sx={{ width: '100%', maxWidth: "100%", bgcolor: 'transparent', display: "block", padding: "0px", color: "white", margin: "0.6rem 0" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" style={{ backgroundColor: "rgb(0, 0, 0)", color: "white", fontWeight: "700" }}>
              ПОДБОР ПАРАМЕТРОВ
            </ListSubheader>
          }
        >
          <ListItemButton
            style={{ backgroundColor: "var(--color-brand--1)" }}
            onClick={() => {
              let newState={...state}.isopen
              let newIsopen={...newState,price:!state.isopen.price}
              dispatch({type:"CHANGE_ISOPEN_FILTER",payload:newIsopen})
            }}>
            <ListItemText primary="ЦЕНА" />
            <ExpandMore />
          </ListItemButton>
          <Collapse in={state.isopen.price} timeout="auto" unmountOnExit style={{padding:"1rem",backgroundColor: "#2D2D2D"}}>
            <div className={styles.price_range}>
                <PriceRange get={showvalue} set={setPriceRenge}/>
            </div>
          </Collapse>
          <ListItemButton
            style={{ backgroundColor: "var(--color-brand--1)" }}
            onClick={() => {
              let newState=state.isopen
              let newIsopen={...newState,status:!state.isopen.status}
              dispatch({type:"CHANGE_ISOPEN_FILTER",payload:newIsopen})
            }}>
            <ListItemText primary="СТАТУС" />
            <ExpandMore />
          </ListItemButton>
          <Collapse in={state.isopen.status} timeout="auto" unmountOnExit>
            <div className={styles.status_sector} style={{backgroundColor:"#2D2D2D"}}>
              <div className={styles.sector}>
                <input type='checkbox' className={styles.checkbox} 
                checked={state.filter?.inStock}
                onClick={(e)=>dispatch({type:"SET_FILTER",payload:{inStock:e.target.checked}})}/>
                <p>В НАЛИЧИИ</p>
              </div>
              <div className={styles.sector}>
                <input type='checkbox' className={styles.checkbox} 
                checked={state.filter?.toOrder}
                onClick={(e)=>dispatch({type:"SET_FILTER",payload:{toOrder:e.target.checked}})}/>
                <p>ПОД ЗАКАЗ</p>
              </div>
            </div>
          </Collapse>
        </List>
        <div className={styles.btn_sector}>
          <Button value="ПОКАЗАТЬ" onClick={()=>dispatch({type:"SET_FILTER",payload:{submit:true}})}/>
          <Button value="СБРОСИТЬ" onClick={()=>dispatch({type:"DEL_FILTER",payload:{del:true}})}/>
        </div>
        <p className={styles.footer_des}>
        Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель нашего магазина - предложение широкого ассортимента товаров.
        </p>
      </div>
    </div>
  );
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
                                  id:"4",
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
                          about:"Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ», Казахстан Компания «Кайнар – АКБ»Казахстан Компания «Кайнар – АКБ», Казахстан",
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
