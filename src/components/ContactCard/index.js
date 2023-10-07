import React from 'react'
import styles from './index.module.scss'
import Subtitle from '../Subtitle'
import { ClockIcon, LoctationIcon, SmsIcon, TelIcon } from '../../img/icon'
export default function ContactCard({
    justifyContent= "left",
    color="var(--color-white)",
    titlecolor = "var(--color-white)",
    subtitlecolor = "var(--color-white)",
    maxWidth = "100%",
    width="100%",
    height="100%",
    backgroundColor="var(--color-brand--2)"
  }) {
  return (
    <div
    style={{
        justifyContent:
          (justifyContent === "center" && "center") ||
          (justifyContent === "left" && "left") ||
          (justifyContent === "right" && "right"),
          maxWidth,
          width,
          height,
          color,
          backgroundColor
      }}
     className={styles.Card}>
            <Subtitle textAlign="left" color={titlecolor}>
                Как с нами связаться
            </Subtitle>
            <ul className={styles.contact_list}>
                <li className={styles.contact_item}>
                    <TelIcon/>
                    <p style={{color:subtitlecolor}}>+7 (342) 279-36-13</p>
                </li>
                <li className={styles.contact_item}>
                    <SmsIcon/>
                    <p style={{color:subtitlecolor}}>proauto59@yandex.ru</p>
                </li>
                <li className={styles.contact_item}>
                    <LoctationIcon/>
                    <p style={{color:subtitlecolor}}>г. Пермь, Леонова 82 Б</p>
                </li>
            </ul>
            <Subtitle textAlign="left" color={titlecolor} margin='3rem 0 0 0'>
                Режим работы
            </Subtitle>
            <ul className={styles.contact_list}>
                <li className={styles.contact_item}>
                    <ClockIcon/>
                    <p style={{color:subtitlecolor}}>
                        Пн. – Вс.: с 9:00 до 18:00
                    </p>
                </li>
            </ul>
    </div>
  )
}
