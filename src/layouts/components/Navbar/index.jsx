import React, {
  useState
} from "react";
import styles from "./index.module.scss";
import DropDown from "../../../components/DropDown";
import {
  dropData, handleSearchOpen
} from "../../../store/store";
import Search from "../../../components/Search";
import { Link } from "react-router-dom";
import Hamburger from "../../../components/Hamburger";
import ProgressBar from "../../../components/ProgressBar";
import Logo from "../../../components/Logo";


const Navbar = () => {
  const [search,setSearch] =useState(false);
  const [value, setValue] = useState(0);
  const animateValue = async () => {
    // Increase value from 0 to 100 in 1 second
    for (let i = 0; i <= 100; i++) {
      await new Promise(resolve => setTimeout(resolve, 10)); // Adjust the delay if needed
      setValue(i);
    }

    // Wait for 1 second
    await new Promise(resolve => setTimeout(resolve, 500));

    // Set the value back to 0
    setValue(0);
  };

function handleOpen() {
  setSearch(!search)
  handleSearchOpen()
}

  return (
    <>
      <header className={styles.header} >
        <div className="container">
          <div className={styles.header__container}>
            <a href="/">
              <Logo/>
            </a>
            <nav  className={styles.header__nav}>
              <ul className={styles.header__list}>
                {dropData.map(el=>
                <li  key={el.id}   className={styles.header__item}>
                   <Link onClick={animateValue}   to={el.to}   className={styles["header__item-link"]} children={el.title}/>
                  {el.data?<DropDown className={styles.header__dropdown} hover={true} id={el.id}/> :<div></div>}
                </li>)}
              </ul>
             
            </nav>
              <Search/>
            <div className={styles.header__manage}>
              {/* <button onClick={handleOpen} className={styles["header__search-button"]}></button> */}
              <Hamburger animateValue={animateValue} />
            </div>
              
          </div>
        </div>
          <div className={styles.header__blur}></div>
        <ProgressBar progress={value}/>
      </header>
    </>
  );
}

export default Navbar;