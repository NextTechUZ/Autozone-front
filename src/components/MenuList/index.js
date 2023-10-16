import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss"
import { dropData } from '../../store/store';
import { Link } from 'react-router-dom';
export default function ListItem(props) {
    let [state,setState]=useState({})
    useEffect(()=>{
        dropData[1].data.filter(item=>{
            if(props.id==item.id){
                let newItem=item.drop?.map(item=>{
                    return {...item,isopen:false}
                })
                item={...item,drop:newItem,isopen:true}
                setState({data:item})   
            }
        })
    },[])
    const handleClick = (id) => {
        isOpen(id)
      };

    const isOpen=(id)=>{
    let drop=state.data.drop.map(item=>id==item.id?{...item,isopen:!item.isopen}:item)
    let {data}=state
    data={...data,drop}
    setState({...state,data})
    }
    return (
        <div style={props.sx} className={styles.list_area}>
            <ul className={styles.list}>
               <li className={styles.item}>
                <div className={styles.item_button} style={{backgroundColor:"var(--color-brand--1)"}}>
                    <p>{state.data?.text}</p>
                    {/* <div className={styles.dropdown}></div> */}
                </div>
                
                <ul className={styles.list}>
                    {
                        state.data?.drop.map((item,index)=><li key={index} className={item.isopen? styles.active : styles.not_active +" "+styles.item}>                            
                            <div className={styles.item_button}
                                onClick={() => handleClick(item.id)}>
                                {item.text}
                                <div className={item.isopen?styles.dropdown:styles.dropright}></div>
                            </div>
                            <ul className={styles.list}>
                                {
                                    item.isopen?item.drop?.map((item,index)=><li key={index} className={styles.item} onClick={()=>{
                                        localStorage.setItem("catalogPraduct",JSON.stringify(item))
                                        }}>
                                            <Link to="/catalog-product">
                                                <div className={styles.item_button}>
                                                        {item.text}
                                                </div>
                                            </Link>
                                    </li>):""
                                }
                            </ul>
                        </li>)
                    }
                </ul>
                </li>
            </ul>
        </div>
    )
}
