import React from 'react'
import styles from "./index.module.scss"
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import ContactCard from '../../components/ContactCard'
import Map from '../../components/Map'
import AskQuestionPage from '../AskQuestionPage'
export default function ContactPage(){
  return (
    <div className={styles.Contact_page}>
        <div className='container'>
            <Title outline={true}>
                КОНТАКТЫ
            </Title>
            <Subtitle margin='2rem 0'>
                Аккумуляторы и автомасла в Перми
            </Subtitle>a
            <div className={styles.contact_section}>
                <ContactCard width="50%"/>
                <Map width="50%"/>
            </div>
            {/* <AskQuestionPage/> */}
        </div>
    </div>
  )
}
