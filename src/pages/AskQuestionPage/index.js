import Button from "../../components/Button";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Form from "../../components/section/FormSection";
import styles from "./index.module.scss";
import { useMutation } from "react-query";
import axios from "axios";

function AskQuestionPage() {
  
  return (
    <div className={styles.ask}>
        <div className={styles.ask__header}>
          <Title size="2.4rem" textSize="1.2rem" textWeight="800" color="white" maxWidth="296px" textAlign="left" margin=" 0 auto" marginTop="0px" children="Зaдать вопрос" text="Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции. " />
        </div>
        <Form color="black"/>
      
    </div>
  );
}

export default AskQuestionPage;
