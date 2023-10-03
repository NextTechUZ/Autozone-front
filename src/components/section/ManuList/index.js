import React  from 'react'
import styles from"./style.module.scss"
import ListItem from '../../MenuList';
import Filter from '../../Filter';



export default function ManuList(){
 

  return (
    <div className={styles.left}>
        <ListItem id={1} sx={{width:"100"}}/>
        <Filter/>
    </div>
  );
}

