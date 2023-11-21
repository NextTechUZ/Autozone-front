import Button from "../Button";
import Subtitle from "../Subtitle";
import styles from "./index.module.scss";
function ImgCard({ imgUrl, title }) {
  return (
    <div className={styles["img-card"]}>
      <img className={styles.img} src={imgUrl} />
      <div className={styles.intro}>
            <h3 className={styles.img__title}>{title}</h3>
         <div className={styles.img__button}>
         <Button color="#fff" value="СДЕЛАТЬ ЗАКАЗ" />
         </div>
      </div>
    </div>
  );
}

export default ImgCard;
