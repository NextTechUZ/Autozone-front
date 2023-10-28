import React  from 'react'
import ListItem from '../../MenuList';
import Filter from '../../Filter';



export default function ManuList({
  menuData,
  width="100%",
  color="var(--color-white)",
}){
 

  return (
    <div style={{width,color}}>
        <ListItem width="100" menuData={menuData}/>
        <Filter/>
    </div>
  );
}

