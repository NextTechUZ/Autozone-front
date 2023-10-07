import React  from 'react'
import styles from"./style.module.scss"
import ListItem from '../../MenuList';
import Filter from '../../Filter';



export default function ManuList({
  width="100%",
  color="var(--color-white)"
}){
 

  return (
    <div style={{width,color}}>
        <ListItem id={1} sx={{width:"100"}}/>
        <Filter/>
    </div>
  );
}

