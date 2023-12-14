import React from 'react'
import styles from '../Filter/style.module.scss'
import FilterDrop from '../FilterDrop'

function FilterCategory({queryObject,onClick,dropdata}) {
    return (
        <ul className={styles["filter__category-list"]}>
              {dropdata.map(el =>
                <li key={el.id} className={styles["filter__category-item"]}>
                  <input type="checkbox" className={styles["filter__checkbox"]} id={el. value} />
                    <div className={styles["filter__category-wrapper"]}>
                    <label htmlFor={el.value} className={ styles["filter__category-button"]}>{el.text}
                  </label>
                   <FilterDrop  data={el.drop} queryObject={queryObject} onClick={onClick}/>
                    </div>
                </li>)}
            </ul>
    )
}

export default FilterCategory
