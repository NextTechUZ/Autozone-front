import React from 'react'
import Title from '../../Title'
import Subtitle from '../../Subtitle'
import ContactCard from "../../ContactCard";
import Map from "../../Map";
import styles from "./style.module.scss"
export default function Contact() {
  return (
    <div className={styles.contact_section}>
          <div className="container">
            <Title outline={true}>КОНТАКТЫ</Title>
            <Subtitle margin="2rem 0">
              Аккумуляторы и автомасла в Перми
            </Subtitle>
            <div className={styles.contact_sector}>
              <ContactCard width="50%" />
              <Map width="50%"/> 
            </div>
          </div>
        </div>
  )
}
