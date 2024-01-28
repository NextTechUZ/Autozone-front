import React from 'react'
import styles from "./index.module.scss"
import Image from "../../../img/car-footer.jpg"
import Button from '../../../components/Button'
import { dropData } from '../../../store/store'
import FooterList from '../../../components/FooterLists'


function Footer() {
  return (
    <footer style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover',  }}  className={styles.footer}>
      <div className={styles.footer__gradient}>
      <div className='container'>
        <div className={styles.footer__container}>
         <div className={styles["footer__logo-column"]}>
          <a href='/'>
            <img className={styles.footer__logo} width="168" height="74" src={require('../../../img/logo.png')}></img>
          </a>
          <p className={styles.footer__info}>© 2023 PRO Auto. 
          Все права защищены.</p>
         </div>
         {dropData.map(el=>el.data?<FooterList key={el.id} data={el.data } title={el.title}/>:"")}
        
        <div className={styles.footer__connect}>
          <a className={styles.footer__connect__link} href='tel:+998-99-633-60-15'><span className={styles.footer__span}><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 5.50944L8.86158 11.6444L10 12.4325L11.1384 11.6444L20 5.50944V16H0V5.50944ZM0 0.644402V0H20V0.644402L10 7.56748L0 0.644402Z" fill="#C53720"/>
</svg></span> +998-99-633-60-15</a>
     

        </div>
        </div>
      </div>
      </div>
     
    </footer>
  )
}

export default Footer