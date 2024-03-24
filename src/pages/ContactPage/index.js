import React from 'react'
import Showcase from '../../components/section/Showcase'
import NavigationStatus from '../../components/section/NavigationStatus'
import styles from './index.module.scss'
import Title from '../../components/Title'
import Form from '../../components/section/FormSection'

function Contact() {
    const showcaseData=[
        {
            id: 1,
            bgImg: require("../../img/contact-bg.jpg"),
            title: "БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO",
            buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
        }
    ]
    const navData = [{
        id: 1,
        name: "ГЛАВНАЯ",
        to: "/"
    },
    {
        id: 2,
        name: "КОНТАКТЫ",
        to: "/contacts"
    },
    ]
    return (
        <>
       <Showcase data={showcaseData}/>
       <NavigationStatus data={navData} />
       <section className={styles.contact}>
        <div className='container'>
            <Title size='3.6rem' children="КОНТАКТЫ" outline text='Аккумуляторы и автомасла в Перми' />
            <div className={styles.contact__wrapper}>
                <div className={styles["contact__text-wrapper"]}>
                <div className={styles.contact__column}>
                <h3 className={styles["contact__info-title"]}>Как с нами связаться</h3>
                    <a className={styles["contact__info-tel"]} href='tel:+998-99-633-60-15'>+998-99-633-60-15</a>
                    
                </div>
                    <div className={styles.contact__column}>
                    <h3 className={styles["contact__info-title"]}>Режим работы</h3>
                    <p className={styles["contact__info-date"]}>Пн. – Вс.: с 9:00 до 18:00</p>
                    </div>
                
                </div>
                <iframe className={styles.contact__iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3045219469427!2d69.214451!3d41.3457343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d8f7a00e49b%3A0x76c30336a2e41c84!2sAutoZone%20shop!5e0!3m2!1sru!2snl!4v1711283979424!5m2!1sru!2snl" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
       </section>
        <section className={styles.ask}>
           <div className={styles.ask__gradient}>
           <div className="container">
                <Title color='#fff' children="ЗАДАТЬ ВОПРОС" outline text='Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором нужной продукции.' textWeight='800' maxWidth='892px' margin='0 auto 44px auto'/>
                <div className={styles["ask__form-wrapper"]}>
                <Form color="#fff" />
                </div>
            </div>
           </div>
        </section>
        </>
    )
}

export default Contact
