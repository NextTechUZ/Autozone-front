import { Link } from "react-router-dom";
import Title from "../../Title";
import styles from "./index.module.scss";
import Icon1 from "../../../img/about-company1.svg";
import Icon2 from "../../../img/about-company2.svg";
function Company() {
  return (
    <div className={styles.company}>
      <div className="container">
        <Title color="white" outline>
          о компании
        </Title>
        <div className={styles.wrapper}>
          <div className={styles["info-box"]}>
            <p>Мы рады приветствовать вас на нашем сайте.</p>
            <br />
            <p>
              Компания «PROавто» - это надежные, качественные аккумуляторы в
              широком ассортименте, разнообразные в по форме и характеристикам,
              а также качественные масла и автохимия именитых брендов.
            </p>
            <br />
            <p>
              Сеть магазинов «PROавто» более 20-и лет занимается продажей
              автомобильных аккумуляторов, масел, расходных материалов, химией и
              аксессуаров. Мы зарекомендовали себя как надежная компания,
              специалисты которой всегда готовы проконсультировать по любому
              вопросу: от подбора автощёток, до рекомендаций по подбору
              аккумулятора для Вашего автомобиля. Мы дорожим своей репутацией и
              даём гарантию на весь ассортимент продукции, представленной на
              нашем сайте!
            </p>
            <br />
            <p>Убедитесь в этом сами!</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src={Icon1} alt="" />
              <Link className={styles.link} to="">
                Реквизиты
              </Link>
            </div>

            <div className={styles.icon}>
              <img src={Icon2} alt="" />
              <Link className={styles.link} to="">
                Задать вопрос
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
