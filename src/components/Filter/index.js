import React, {  useReducer } from 'react'
import Button from '../Button/index';
import PriceRange from '../Range/index';
import styles from './style.module.scss';
export const reduser = (state, action) => {

    let { payload } = action
    switch (action.type) {
        case "CHANGE_ISOPEN_FILTER":
            let {isopen}=state
            isopen={...isopen,...payload}
            return { ...state, isopen}
        case "SET_FILTER":
            let { filter } = { ...state }
            filter.del = false
            filter = { ...filter, ...payload }
            return { ...state, filter }
        case "CHANGE_PRICE_RANGE":
            let { rangePrice } = { ...state }
            rangePrice = { ...rangePrice, work:payload}
            return { ...state,rangePrice}
        case "DEL_FILTER":
            return { ...state, filter: { del: true } }
        default:
            break;
    }
}

export default function Filter(props) {
    const [state, dispatch] = useReducer(reduser, {
        isopen: {
            status: true,
            price: true,
            del:false
        },
        filter: {
            submit: false,
            del: false
        },
    });

    const showvalue = (prop) => {
        dispatch({ type: "SET_FILTER", payload: prop })
    }

    //setPriceRenge
    const setPriceRenge = () => {
            return { min: 0, max: 10000 }
    }
    return (
        <div className={styles.filter_comp}>
            <div className={styles.filter_title}>
                ПОДБОР ПАРАМЕТРОВ
            </div>
            <div style={props.sx} className={styles.list_area}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div
                        onClick={()=>dispatch({type:"CHANGE_ISOPEN_FILTER",payload:{price:!state.isopen.price}})} className={styles.item_button} style={state.isopen.price?{ backgroundColor: "var(--color-brand--1)"}:{ backgroundColor: "var(--color-brand--4)"}}>
                            <p>ЦЕНА</p>
                            <div className={state.isopen.price?styles.dropdown:styles.dropright}></div>
                        </div>
                        {
                            state.isopen.price?<ul className={styles.list}>
                            <div className={styles.price_range}>
                                <PriceRange get={showvalue}/>
                            </div>
                            </ul>:""
                        }
                        
                    </li>
                    <li className={styles.item}>
                        <div 
                        onClick={()=>dispatch({type:"CHANGE_ISOPEN_FILTER",payload:{status:!state.isopen.status}})}
                        className={styles.item_button} style={state.isopen.status?{ backgroundColor: "var(--color-brand--1)"}:{ backgroundColor: "var(--color-brand--4)"}}>
                            <p>СТАТУС</p>
                            <div className={state.isopen.status?styles.dropdown:styles.dropright}></div>
                        </div>
                        {
                            state.isopen.status? <ul className={styles.list}>
                            <div className={styles.status_sector}>
                                <div className={styles.sector}>
                                    <input type='checkbox' className={styles.checkbox}
                                        checked={state.filter?.inStock}
                                        onClick={(e) => dispatch({ type: "SET_FILTER", payload: { inStock: e.target.checked } })} />
                                    <p>В НАЛИЧИИ</p>
                                </div>
                                <div className={styles.sector}>
                                    <input type='checkbox' className={styles.checkbox}
                                        checked={state.filter?.toOrder}
                                        onClick={(e) => dispatch({ type: "SET_FILTER", payload: { toOrder: e.target.checked } })} />
                                    <p>ПОД ЗАКАЗ</p>
                                </div>
                            </div>
                        </ul>:""
                        }
                       
                    </li>
                </ul>
            </div>
            <div className={styles.btn_sector}>
                <Button value="ПОКАЗАТЬ" onClick={() => dispatch({ type: "SET_FILTER", payload: { submit: true } })} />
                <Button value="СБРОСИТЬ" 
                onClick={() => dispatch({ type: "DEL_FILTER", payload: { del: true } })}/>
            </div>
            <p className={styles.footer_des}>
                Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель нашего магазина - предложение широкого ассортимента товаров.
            </p>
        </div>
    )
}


