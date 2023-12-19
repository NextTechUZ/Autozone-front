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
  function handleClose(id) {

        dropData.forEach(element => {
            if (element.id == id) {
              element.focus = !element.focus
              setFocus(!focus)
            }
          }); 
          
    
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
              className={styles.header__logo}
                src={require("../../../img/logo.png")}
              ></img>
            </a>
            <nav  className={styles.header__nav}>
              <ul className={styles.header__list}>
                {dropData.map(el=>
                <li    key={el.id}   className={styles.header__item}>
                   <Link  onMouseOver ={()=>handleFocus(el.id)} onMouseOut={()=>handleClose(el.id)}  to={el.to}   className={styles.header__item__link} children={el.title}/>
                  {el.data?<DropDown hover={true} id={el.id}/> :<div></div>}
                </li>)}
              </ul>
              <Button to='/ask-question' style={{color:"#fff"}}  value="ЗАКАЗАТЬ ЗВОНОК" />
            </nav>
            
           <Search />
            <div className={styles.header__manage}>
              <button onClick={handleOpen} className={styles["header__search-button"]}></button>
              <Hamburger />
            </div>
           
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;