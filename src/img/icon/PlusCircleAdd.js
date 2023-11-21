import React from 'react'
const PlusCircleAdd=(props)=>{
    let color=props.color==undefined? "white" :props.color
    return (
        <svg width="3rem" height="3rem" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:`rotate(${props.rotate==undefined? "0deg" :props.rotate})`}}>
            <circle cx="25" cy="25" r="22.5" stroke={color} strokeWidth="0.2rem"/>
            <path d="M25 14.5L25 35.5" stroke={color} strokeWidth="0.2rem"/>
            <path d="M35.5 25H14.5" stroke={color} strokeWidth="0.2rem"/>
        </svg>
    )
}
export {PlusCircleAdd}