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
import Button from "../../../components/Button";
import Hamburger from "../../../components/Hamburger";
export const buttonData={
  width:"168px",
  color:"#fff",
  backgroundColor:"transparent",
  value:"ЗАКАЗАТЬ ЗВОНОК",
  link:"/",

}
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
                  <DropDown hover={true} id={el.id}/>
                </li>)}
               
              </ul>
              <Button prop={buttonData}/>
            </nav>
            
           <Search />
            <div className={styles.header__manage}>
              <button onClick={handleOpen} className={styles.header__search__button}></button>
             
              <a href="/">
                <img
                  width="40"
                  height="40"
                  src={require("../../../img/user.png")}
                ></img>
              </a>
              <Hamburger />
            </div>
           
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;