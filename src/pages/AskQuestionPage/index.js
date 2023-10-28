import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import styles from "./index.module.scss";
import { useMutation } from "react-query";
import axios from "axios";

function AskQuestionPage({
  wraptop = true,
  outline = false,
  maxWidth = "30rem",
  TitleSize = "2.4rem",
  SubTitleSize = "1.2rem",
  SubTitleMargin = "0 0",
  labalColor = "var(--color-brand--2)",
  agreeColor = "var(--color-brand--2)",
}) {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const allowRef=useRef()
  const submitData=(e)=>{
    e.preventDefault()
    let data=new FormData(e.currentTarget)
    let value=[...data.entries()]
    let empty=false
    value.map((item,index)=>{
      if(item[1]==""){
        empty=true
        e.target[index].placeholder="должен быть заполнен"
      }
    })
    let obj =Object.fromEntries(data)
    if(!empty&&allowRef.current.checked){
      e.currentTarget.reset()
      console.log(obj);
      // useMutation(()=>axios.post("url",obj))
    }
  } 
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper--form"]}>
        <div className={wraptop ? styles["wrapper--form__top"] : ""}>
          <Title color="var(--color-white)" size={TitleSize} outline={outline}>
            ЗАдать вопрос
          </Title>
          <Subtitle
            color="var(--color-white)"
            maxWidth={maxWidth}
            size={SubTitleSize}
            margin={SubTitleMargin}
          >
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции.
          </Subtitle>
        </div>
        <form className={styles.form} onSubmit={submitData}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              Ваше имя:*
            </label>
            <input type="text" name="name" className={styles.errorInput}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>      
              Телефон:*
            </label>
            <input type="text" name="phoneNumber"/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              E-mail
            </label>
            <input type="text" name="email"/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              Сообщение:*
            </label>
            <textarea/>
          </div>
          <div className={styles["checkbox-wrapper"]}>
            <div className={styles["squaredOne"]}>
              <input
                value="true"
                type="checkbox"
                id="squaredOne"
                name="check"
                ref={allowRef}
              />
              <label for="squaredOne"></label>
            </div>
            <label htmlFor="" style={{ color: agreeColor }}>
              Я согласен на{" "}
              <p style={{ color: "var(--color-brand--1)" }}>
                обработку персональных данных
              </p>
            </label>
          </div>
            <Button justifyContent="right" color="var( --color-brand--1)" link="" type="Submit">ОТПРАВИТЬ</Button>
        </form>
      </div>
    </div>
  );
}

export default AskQuestionPage;
