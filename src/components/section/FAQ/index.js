import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import BackImg from "../../../img/300a95887bcfc7753f-77018606 1.png";
import backendInfo from './backend';
import styles from "./style.module.scss"
import Button from '../../Button';
import {PlusCircleAdd} from '../../../img/icon/PlusCircleAdd';

 function Faq() {
    let [state, setState] = useState({ request: []})
    useEffect(() => {
        getBackent(1)
    }, [])
    
    const getBackent=(id)=>{
        let newAllState = backendInfo().map((item, index) => {
            return { ...item,isopen:item.id==id?true:false}
        })
        let newState = backendInfo().filter((item, index) => {
            if(id==item.id){
                return item
            }
        })[0].main.map((item)=>{
            return {...item,isopen: false}
        })
        setState({ ...state, request: newAllState,respon: newState})
    }
    
    function ShowRespon(id){
        let newState = state.request.filter((item, index) => {
            if(id==item.id){
                item.isopen=true
                return {...item}
            }
            else{
                item.isopen=false
                return item
            }
        })
        let newRespon = backendInfo().filter((item, index) => {
            if(id==item.id){
                return item
            }
        })[0].main.map((item)=>{
            return {...item,isopen: false}
        })
        state.respon=newRespon
        setState({ ...state, request: newState})
    }
    const handleOpen=(id)=>{
        let item=state.respon.map((item,index)=>item.id==id?{...item,isopen:!item.isopen}:item)
        setState({...state,respon:item})
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
                            state.request?.map((item,index)=><div key={index} className={item.isopen?styles.active:""}
                                    onClick={()=>{
                                        ShowRespon(item.id)
                                    }}
                                    >
                                    {item.title}
                                </div>
                            )
                        }
                    </div>
                    <List
                        sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background .paper', display: "block", padding: "0px", color: "white", marginBottom:"4rem" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        {
                            state.respon?.map((item,index) => {
                                return <div key={index} style={{borderBottom: "1px solid rgb(255, 255, 255)"}}>
                                    <ListItemButton
                                        className={styles.respon_card}
                                        onClick={()=>{handleOpen(item.id)}}
                                        >
                                        <ListItemText primary={item.title} className={styles.respon_title}/>   
                                    {item.isopen ? <PlusCircleAdd 
                                    color="rgba(197, 55, 32, 1)" rotate="45deg"
                                    /> : <PlusCircleAdd/>
                                    }
                                    </ListItemButton>
                                    <Collapse in={item.isopen} timeout="auto" unmountOnExit>
                                        <ListItemButton key={index} style={{ paddingBottom:"1rem"}}>
                                            <ListItemText primary={item.main} className={styles.responmain}/>
                                        </ListItemButton>
                                    </Collapse>
                                </div>
                            })
                        }
                    </List>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <Button value="ЗАДАТЬ ВОПРОС"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq