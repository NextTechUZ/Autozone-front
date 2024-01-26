import React from 'react';
import styles from '../Filter/style.module.scss'

function FilterDrop({data,onClick,queryObject}) {
    if (data.status) {
      return(
        <ul className={styles["filter__drop-list"]}>
          <li>{data.status}</li>
        </ul>
      )
    }
    return (
        <ul className={styles["filter__drop-list"]}>
                    {data?.map(elem =>
                      <li key={elem._id}  onClick={()=>onClick({...queryObject, [elem.value]:elem._id})} className={styles["filter__drop-item"]}>
                        <input id={elem._id} type="radio" name={elem.value} className={styles["filter__drop-radio"]} />
                          <label htmlFor={elem._id} className={styles["filter__drop-label"]}> {elem.title}</label>
                      </li>
                    )}
        </ul>
    )
}

export default FilterDrop
