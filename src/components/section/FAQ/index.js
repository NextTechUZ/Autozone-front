import React, { useEffect, useState } from 'react';
import BackImg from "../../../img/300a95887bcfc7753f-77018606 1.png";
import backendInfo from './backend';
import styles from "./style.module.scss"
import Button from '../../Button';
import { PlusCircleAdd } from '../../../img/icon/PlusCircleAdd';
import { Link } from 'react-router-dom';

function Faq() {
    let [state, setState] = useState({ request: [] })
    useEffect(() => {
        getBackent(1)
    }, [])

    const getBackent = (id) => {
        let newAllState = backendInfo().map((item, index) => {
            return { ...item, isopen: item.id == id ? true : false }
        })
        let newState = backendInfo().filter((item, index) => {
            if (id == item.id) {
                return item
            }
        })[0].main.map((item) => {
            return { ...item, isopen: false }
        })
        setState({ ...state, request: newAllState, respon: newState })
    }

    function ShowRespon(id) {
        let newState = state.request.filter((item, index) => {
            if (id == item.id) {
                item.isopen = true
                return { ...item }
            }
            else {
                item.isopen = false
                return item
            }
        })
        let newRespon = backendInfo().filter((item, index) => {
            if (id == item.id) {
                return item
            }
        })[0].main.map((item) => {
            return { ...item, isopen: false }
        })
        state.respon = newRespon
        setState({ ...state, request: newState })
    }
    const handleOpen = (id) => {
        let item = state.respon.map((item, index) => item.id == id ? { ...item, isopen: !item.isopen } : item)
        setState({ ...state, respon: item })
    }
    return (
        <div className={styles.faq_section}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.7)),url("${BackImg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container">
                <p className={styles.section_title}>
                    F. A. Q
                </p>
                <p className={styles.section_desc}>
                    В данном разделе приведены ответа на часто задаваемые вопросы наших клиентов.
                </p>
                <div className={styles.main}>
                    <div className={styles.reques_title}>
                        {
                            state.request?.map((item, index) => <div key={index} className={item.isopen ? styles.active : ""}
                                onClick={() => {
                                    ShowRespon(item.id)
                                }}
                            >
                                {item.title}
                            </div>
                            )
                        }
                    </div>
                    <div className={styles.list_area}>
                        <ul className={styles.list}>
                            {
                                state.respon?.map((item, index) =><li key={index} className={styles.item}>
                                    <div className={styles.item_button}
                                        onClick={()=>{handleOpen(item.id)}}>
                                        <p className={styles.title}>
                                            {item.title}
                                        </p>
                                        {item.isopen ? <PlusCircleAdd 
                                        color="rgba(197, 55, 32, 1)" rotate="45deg"
                                        /> : <PlusCircleAdd/>
                                        }
                                    </div>
                                    {
                                        item.isopen ?<div className={styles.main}>
                                        {item.main}
                                        </div>:""
                                    }
                                </li>)
                            }
                        </ul>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "center",marginTop:"4rem"}}>
                        {/* <Button value="ЗАДАТЬ ВОПРОС" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq