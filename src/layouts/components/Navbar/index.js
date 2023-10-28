import React, {
  useEffect,
  useState
} from "react";
import styles from "./index.module.scss";
import DropDown from "../../../components/DropDown";
import {
  Caa,
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
  value:"",
  link:"/",

}
const Navbar = () => {
  const [focus, setFocus] = useState(false);
  const [search,setSearch] =useState(false)

  function handleFocus(id) {
    dropData.forEach(element => {
      if ((element.id == id) && (element.data!==undefined)){
        console.log(element.data);
        element.focus = true
      } else {
        element.focus = false
      }
    });
    setFocus(!focus)
  }
 const  removeFocus =() => {
  dropData.forEach(element => {
     
       element.focus = false
    
  });
  setFocus(!focus)

 }
function handleOpen() {
  setSearch(!search) 
  handleSearchOpen() 
}
  return (
    <>
      <header className={styles.header} onMouseLeave ={()=>removeFocus()}>
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
                   <Link to={el.to} onMouseEnter ={()=>handleFocus(el.id)}    className={styles.header__item__link} children={el.title}/>
                  <DropDown  id={el.id}/>
                </li>)}
               
              </ul>
              <Button link="/ask-question">ЗАКАЗАТЬ ЗВОНОК</Button>
            </nav>
            
              <Search/>
            <div className={styles.header__manage}>
            <Link to="/search">
              <button onClick={handleOpen} className={styles.header__search__button}></button>
            </Link>
              <Hamburger />
            </div>
           
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;