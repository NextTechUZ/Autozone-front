import Button from "../../components/Button";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import styles from "./index.module.scss";

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
        <form className={styles.form} action="">
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              Ваше имя:*
            </label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              Телефон:*
            </label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              E-mail
            </label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="" style={{ color: labalColor }}>
              Сообщение:*
            </label>
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
            <label htmlFor="" style={{ color: agreeColor }}>
              Я согласен на{" "}
              <p style={{ color: "var(--color-brand--1)" }}>
                обработку персональных данных
              </p>
            </label>
          </div>

          <div className={styles["form--bottom"]}>
            <Button justifyContent="right">ОТПРАВИТЬ</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestionPage;
