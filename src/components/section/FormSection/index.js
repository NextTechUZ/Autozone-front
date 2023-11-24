import React, { useRef, useState } from 'react'
import styles from './index.module.scss'
import Input from '../../Input'
import Button from '../../Button'

function Form({color}) {
    const [values,setValues]=useState(
        {
            nameValue:"",
            telValue:"",
            emailValue:"",
            productValue:"",
            messageValue:""
        }
    )
    const inputInfo=[
        {
            id:"name",
            type:"text",
            info:"Ваше имя:*",
            placeholder:"",
            textarea:false,
            ref:useRef()
        },
        {
            id:"tel",
            type:"tel",
            info:"Телефон:*",
            placeholder:"",
            textarea:false,
            ref:useRef()
        },
        {
            id:"email",
            type:"email",
            info:"E-mail" ,
            placeholder:"",
            textarea:false,
            ref:useRef()
        },
        {
            id:"product",
            type:"text",
            info:"Интересующий товар / услуга:",
            placeholder:"",
            textarea:false,
            ref:useRef()
        },
        {
            id:"message",
            type:"text",
            info:"Сообщение:*",
            placeholder:"",
            textarea:true,
            ref:useRef()
        },
    ]
    let border=`4px solid ${color}`
    function clicker(evt) {
        evt.preventDefault();
      setValues(
        {
            nameValue:inputInfo[0].ref.current.value,
            telValue:inputInfo[1].ref.current.value,
            emailValue:inputInfo[2].ref.current.value,
            productValue:inputInfo[3].ref.current.value,
            messageValue:inputInfo[4].ref.current.value
      })
       
    }
    console.log(values);
    return (
        <form onSubmit={clicker} className={styles.form}>
         {
            inputInfo.map(({id,type,info,placeholder,textarea,ref})=>
            <Input color={color} key={id} ref={ref} id={id} type={type} info={info} placeholder={placeholder} textarea={textarea} />)
         }
           <div className={styles["form__checkbox-wrapper"]}>
            <div>
              <input type="checkbox" value="checkbox" id="checkbox" name="check" className={styles["form__checkbox"]}/>
              <label style={{border:border}} className={styles["form__checkbox-label"]}></label>
              </div>
            <label style={{color:color}}  className={styles["form__checkbox-text-label"]} htmlFor="checkbox">
              Я согласен на <span className={styles["form__checkbox-span"]}> обработку персональных данных</span>
            </label>
          </div>

          <div className={styles["form__bottom"]}>
            <p className={styles.form__text}>* Обязательное поле</p>
            <Button type="submit"  value="ОТПРАВИТЬ" color="#C53720"/>
          </div>
        </form>
    )
}

export default Form
