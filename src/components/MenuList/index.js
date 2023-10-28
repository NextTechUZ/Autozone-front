import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss"
import { dropData } from '../../store/store';
import { Link, useLocation } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { FetchData } from '../../hook/fetchAxios';
export default function ListItem({
    menuData,
    width="100%"
}) {
    let [state,setState]=useState({})
    useEffect(()=>{
        let data=menuData?.map(item=>{return{...item,isopen:false}})
        setState({...state,data}) 
    },[])
    const {data,refetch,isLoading:menuDataIsLoading}=useQuery(state?.menuInData?.title,()=>FetchData(state?.menuInData?.api),{
        select:(data)=>{
          return data.data.data
        },
        onSuccess:(respon)=>{
            setState({...state,data:state.data.map(item=>item.id==state.menuInData.id?{...item,drop:respon}:item)})},
        enabled:false
      })
    const handleClick = (menuData) => {
        let data=state.data?.map(item=>menuData.id==item.id?{...item,isopen:!item.isopen}:item)
        setState({...state,data,menuInData:menuData})
        refetch()
      };
    return (
        <div style={{width}} className={styles.list_area}>
            <ul className={styles.list}>
                    {
                        state.data?.map(item=><li key={item.id} className={item.isopen? styles.active : styles.not_active +" "+styles.item}>   
                            <div className={styles.item_button}
                                onClick={()=>{
                                    handleClick(item)
                                    }}>
                                {item.title}
                                <div className={item.isopen?styles.dropdown:styles.dropright}></div>
                            </div>
                            <ul className={styles.list}>
                                {
                                    (item?.drop)&&(item.isopen)?Object.values(item.drop)[1]?.map((data,dataIndex)=><li 
                                    className={styles.item}
                                    key={dataIndex} 
                                    onClick={()=>console.log(data)}>
                                        <div className={styles.item_button}>
                                            {data.title}
                                        </div>
                                    </li>):""
                                }
                            </ul>
                        </li>)
                    }
            </ul>
        </div>
    )
}
