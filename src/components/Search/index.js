import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import styles from './index.module.scss'
import {
  handleSearchClose,
  products,
  searchControl
} from '../../store/store'
import { Link } from 'react-router-dom';

function Search() {
  const [display, setDisplay] = useState(searchControl);
  const [data, setData] = useState([]);
  const [filter ,setFilter]=useState(false);
  const [allData,setAllData]=useState([])
  const searchRef = useRef();

  function handleSearch(evt) {
    evt.preventDefault();
    const searchValue = searchRef.current.value
    if (searchValue=="") {
      setData([])
    } else {
      const finded = products.filter((el) => {
        const searchRegExp = new RegExp(searchValue, "gi");
        const searchText = `${el.name}`;
        return searchText.match(searchRegExp);
  
      })
      setAllData(finded)
      if (finded.length > 3 ) {
        setFilter(true)
        setData(finded.slice(0,3))
       
      }
      else{
        setData(finded)
      }
    }
   
    
  }

  useEffect(() => {
    if (searchControl) {
      setDisplay(searchControl)
    }
  }, [searchControl])

  function handleClose() {
    setDisplay(false)
    handleSearchClose()
  }
  function handleFilter() {
    setFilter(false);
    setData(allData)
  }
  return (
  <>
  <div style={display?{display:'block'}:{display:'none'}} className={styles.search}>
      <div className='container'>
         <div className={styles.search__header}>
         <form onSubmit={handleSearch} className={styles.search__form}>
              <input ref={searchRef} className={styles.search__input} type='text'></input>
               <button className={styles.search__button}>НАЙТИ</button>
          </form>
          <button onClick={handleClose} className={styles.search__close}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L16 16" stroke="#A5A5A5" stroke-width="4"/>
            <path d="M16 4L4 16" stroke="#A5A5A5" stroke-width="4"/>
          </svg></button>
         </div>
         <ul className={styles.search__results}>
           {data?.map((el)=><li key={el.id} className={styles.search__item}>
            <Link className={styles.search__reslink} to={el.to} children={el.name}/>
           </li>)}
           <button  onClick={handleFilter} style={filter?{display:'block'}:{display:'none'}} className={styles.search__resbutton}>Все результаты</button>
         </ul>
      </div>
  </div>
  </>
  )
}

export default Search