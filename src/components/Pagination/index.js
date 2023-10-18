import React, { useEffect, useState } from 'react'
import {Dropaft} from "../../img/icon/index"
export default function Pagination({
    display="flex",
    justifyContent="center",
    margin="",
    itemwidth="",
    itemheight=itemwidth,
    fontSize="1.4rem",
    padding="0.5rem 1rem",
    fontWeight="400",
    background,
    color="#A5A5A5",
    border="0.4rem solid #A5A5A5",
    itemHoverColor="var(--color-brand--1)",
    itemHoverFontColor="var(--color-white)",
    prevIcon=<Dropaft color={color} strokeWidth={"0.3rem"} width={"2rem"}/>,
    nextIcon=<Dropaft color={color} strokeWidth={"0.3rem"} width={"2rem"}/>,
    ToShow=10,
    PaginationSum="0",
    active=1,
    get
}) {
    let [state,setState]=useState({
        itemHover:{itemId:""},
        itemActive:{itemId:active},
    })
    useEffect(()=>{
        get(active)
        let arry=[]
        for(let i=1;i<=PaginationSum;i++){
            arry.push({id:i,number:i})
        }
      
        let newdata=arry.slice(0,ToShow)
        setState({...state,
            ItemsShowBorder:{start:ToShow},
            showdata:newdata,
            paginationData:arry,
        })
    },[])

   
    let nextButtun=()=>{
        let start=state.ItemsShowBorder.start
        if(state.paginationData[start] !== undefined){
            let newdata=state.paginationData?.slice(start,start+ToShow)
            setState({...state,
                ItemsShowBorder:{start:start+ToShow},
                showdata:newdata,
                })
        }
    }
    let prevButtun=()=>{
        let start=state.ItemsShowBorder.start
        if(start-ToShow > 0){
            let newdata=state.paginationData?.slice(start-2*ToShow,start-ToShow)
            setState({...state,
                ItemsShowBorder:{start:start-ToShow},
                showdata:newdata,
                })
        }
    }

    let buttonStyle=(id)=>{
        return {
            boxSize:"border-box",
            color:(state.itemHover?.itemId==id)||(state.itemActive?.itemId==id)?itemHoverFontColor:color,
            border:(state.itemHover?.itemId==id)||(state.itemActive?.itemId==id)?`0.5rem solid ${itemHoverColor}`:border,
            background:(state.itemHover?.itemId==id)||(state.itemActive?.itemId==id)?itemHoverColor:background,
            padding,
            width:itemwidth,
            height:itemheight,
            itemheight,fontSize,fontWeight,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            cursor:"pointer"
        }
    }
  return (
    <div style={{
        width:display=="inline-block"?"0":'100%',
        display,
        justifyContent:
          (justifyContent === "center" && "center") ||
          (justifyContent === "left" && "left") ||
          (justifyContent === "right" && "right"),
          margin
      }}>
        <div style={{display: "flex",flexDirection: "row"}}>
            <div  style={{...buttonStyle("prev"),transform:"rotate(180deg)"}}
             onMouseEnter={()=>setState({...state,itemHover:{itemId:"prev"}})}
             onMouseLeave={()=>setState({...state,itemHover:{itemId:""}})}
             onClick={()=>prevButtun()}
             >
                {prevIcon}
            </div>
            {
                state.showdata?.map((item,index)=><div key={index} 
                style={buttonStyle(item.id)}
                onMouseEnter={()=>setState({...state,itemHover:{itemId:item.id}})}
                onMouseLeave={()=>setState({...state,itemHover:{itemId:""}})}
                onClick={()=>{
                    setState({...state,itemActive:{itemId:item.id}})
                    get(item.number)
                }}
                >
                    {item.number}
                </div>)
            }
            <div  style={buttonStyle("next")}
            onMouseEnter={()=>setState({...state,itemHover:{itemId:"next"}})}
            onMouseLeave={()=>setState({...state,itemHover:{itemId:""}})}
            onClick={()=>nextButtun()}
            >
                {nextIcon}
            </div>
        </div>
    </div>
     )
}

