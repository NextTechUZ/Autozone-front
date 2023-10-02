import React, {
  useEffect,
  useState
} from "react";
import styles from "./index.module.scss";
import DropDown from "../../../components/DropDown";
import {
  dropData, handleSearchOpen, searchControl
} from "../../../store/store";
import Search from "../../../components/Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [focus, setFocus] = useState(false);
  const [search,setSearch] =useState(false)

  function handleFocus(id) {
    dropData.forEach(element => {
      if (element.id == id) {
        element.focus = !element.focus
      } else {
        element.focus = false
      }
    });
    setFocus(!focus)
  }
 
function handleOpen() {
  setSearch(!search)
  handleSearchOpen()
}

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__container}>
            <a href="/">
              <img
                width="132"
                height="58"
                src={require("../../../img/logo.png")}
              ></img>
            </a>
            <nav className={styles.header__nav}>
              <ul className={styles.header__list}>
                {dropData.map(el=>
                <li key={el.id}  className={styles.header__item}>
                   <Link to={el.to} onMouseEnter ={()=>handleFocus(el.id)}  className={styles.header__item__link} children={el.title}/>
                  <DropDown active={focus} id={el.id}/>
                </li>)}
               
              </ul>
            </nav>
            <button>ЗАКАЗАТЬ ЗВОНОК</button>
          <Search />
            <div className={styles.header__manage}>
              <button onClick={handleOpen} className={styles.header__search__button}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className={styles.header__shop__button}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11H33.3599L29.9849 23H14V11Z"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path d="M14 4L14 24.5" stroke="white" strokeWidth="4" />
                  <path d="M14 6H4" stroke="white" strokeWidth="4" />
                  <circle
                    cx="17"
                    cy="31"
                    r="3"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <circle
                    cx="28"
                    cy="31"
                    r="3"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
              </button>
              <a href="/">
                <img
                  width="40"
                  height="40"
                  src={require("../../../img/user.png")}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;