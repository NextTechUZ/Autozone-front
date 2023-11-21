import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';
import { dropData } from '../../store/store';

function DropMenu({id,dataId}) {
    const data = dropData.find((el) => el.id == id);
    const findData = data.data.find((el)=>el.id==dataId)
 
    return (
       <div >
         <ul  style={findData.focus?{display:'block'}:{display:'none'}} className={styles.drop__list}>
            {findData.drop.map(el=>
            <li className={styles.drop__item} key={el.id}>
                <Link children={el.name}   className={styles.drop__link}/>
            </li>)}
        </ul>
       </div>
    )
}
export default DropMenu
