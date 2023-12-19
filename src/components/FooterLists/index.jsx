import React from 'react'
import styles from '../../layouts/components/Footer/index.module.scss'
import FooterItems from '../FooterItems'

function FooterList({data,title}) {
    return (
        <ul className={styles.footer__list}>
          <h3 className={styles.footer__list__title}>{title}</h3>
           {data.map(el=><FooterItems key={el.id} to={el.to} name={el.text}/>)}
          </ul>
    )
}

export default FooterList
