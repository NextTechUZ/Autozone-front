import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import styles from "./index.module.scss";

function AskQuestionPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper--form"]}>
        <div className={styles["wrapper--form__top"]}>
          <Title color="var(--color-white)" size="2.4rem">
            ЗАдать вопрос
          </Title>
          <Subtitle color="var(--color-white)" maxWidth="30rem" size="1.2rem">
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции.
          </Subtitle>
        </div>
        <form className={styles.form} action="">
          <div className={styles["input-wrapper"]}>
            <label htmlFor="">Ваше имя:*</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="">Телефон:*</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="">Сообщение:*</label>
            <textarea placeholder="" />
          </div>
          <div className={styles["checkbox-wrapper"]}>
            <div className={styles["squaredOne"]}>
              <input
                type="checkbox"
                value="None"
                id="squaredOne"
                name="check"
                checked
              />
              <label for="squaredOne"></label>
            </div>
            <label htmlFor="">
              Я согласен на обработку персональных данных
            </label>
          </div>

          <div className={styles["form--bottom"]}>
            <p>* Обязательное поле</p>
            <button>ОТПРАВИТЬ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestionPage;
