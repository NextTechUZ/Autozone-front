import React from 'react'
import styles from '../../layouts/components/Footer/index.module.scss'
import { Link } from 'react-router-dom'
function FooterItems({name,to}) {
    return (
        <li className={styles.footer__item}>
        <Link to={to} className={styles.footer__link} children={name} />
       </li>
    )
}

export default FooterItems
