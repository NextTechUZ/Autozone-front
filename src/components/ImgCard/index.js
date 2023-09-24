import Subtitle from "../Subtitle";
import styles from "./index.module.scss";
function ImgCard({ imgUrl, title }) {
  return (
    <div className={styles["img-card"]}>
      <img className={styles.img} src={imgUrl} alt="" />
      <div className={styles.intro}>
        <Subtitle size="2.4rem" color="var(--color-white)" capitalize>
          {title}
        </Subtitle>
        <button>СДЕЛАТЬ ЗАКАЗ</button>
      </div>
    </div>
  );
}

export default ImgCard;
