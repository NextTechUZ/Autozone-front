import React from 'react'
import styles from "./index.module.scss"
import Image from "../../../img/car-footer.jpg"
import Button from '../../../components/Button'
import { dropData } from '../../../store/store'
import FooterList from '../../../components/FooterLists'
import Logo from '../../../components/Logo'


function Footer() {
  return (
    <footer style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover',  }}  className={styles.footer}>
      <div className={styles.footer__gradient}>
      <div className='container'>
        <div className={styles.footer__container}>
         <div className={styles["footer__logo-column"]}>
          <a href='/'>
            <Logo width='100' height='100'/>
            {/* <img className={styles.footer__logo} width="74" height="74" src={require('../../../img/logo.jpg')}></img> */}
          </a>
          <p className={styles.footer__info}>© 2024 AutoZone Shop. 
          Все права защищены.</p>
         </div>
         {dropData.map(el=>el.data?<FooterList key={el.id} data={el.data } title={el.title}/>:"")}
        
        <div className={styles.footer__connect}>
          <a className={styles.footer__connect__link} href='tel:+998-99-633-60-15'> +998-99-633-60-15</a>
     

        </div>
        </div>
      </div>
      </div>
     
    </footer>
  )
}

export default Footer