import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';
import { dropData, } from '../../store/store';

function DropMenu({id,dataId}) {
    const data = dropData.find((el) => el.id == id);
    const findData = data.data.find((el)=>el.id==dataId);

  //  function handleClick(params,id) {
  //   dropData[1].data.forEach((element)=>{
  //       if (element.id==params) {
  //       element.active=true
  //         element.drop.forEach(el=>{
  //           if (el._id==id) {
  //             el.active=true
  //           }
  //          else el.active=false
  //         })
  //       }
  //      else element.active=false
  //     })
  //  }
    return (
       <div >
         <ul  style={findData.focus?{display:'block'}:{display:'none'}} className={styles.drop__list}>
            {findData.drop?.map(el=>
            <li className={styles.drop__item} key={el._id}>
                <Link  to={el.to}  children={el.title}  className={styles.drop__link}/>
                  {/* <input type="checkbox" id={el._id} /> */}
            </li>)}
        </ul>
       </div>
    )
}
export default DropMenu
