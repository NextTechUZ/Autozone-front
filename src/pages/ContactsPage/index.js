import React from 'react'
import styles from "./index.module.scss"
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import ContactCard from '../../components/ContactCard'
import Map from '../../components/Map'
import AskQuestionPage from '../AskQuestionPage'
import AskSectionBg from '../../img/asksection-bg.png'
import Navigation from '../../components/Navigation'
export default function ContactPage(){
  return (
    <div>
        <Navigation/>
        <div className={styles.Contact_page}>
            <div className={styles.contact_section}>
                <div className='container'>
                    <Title outline={true}>
                        КОНТАКТЫ
                    </Title>
                    <Subtitle margin='2rem 0'>
                        Аккумуляторы и автомасла в Перми
                    </Subtitle>
                    <div className={styles.contact_sector}>
                        <ContactCard width="50%"/>
                        <Map width="50%"/>
                    </div>
                </div>
            </div>
            <div className={styles.ask_section} style={{background:`linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.7)),url(${AskSectionBg})`}}>
                <div className='container'>
                    <AskQuestionPage wraptop={false} outline={true} maxWidth='100%' TitleSize='3.6rem' SubTitleSize="2.6rem" SubTitleMargin="2rem 0" labalColor='var(--color-white)' agreeColor='var(--color-white)'/>
                </div>
            </div>
        </div>

    </div>
  )
}
