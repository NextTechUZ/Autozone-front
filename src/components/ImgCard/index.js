import Button from "../Button";
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
        <Button>СДЕЛАТЬ ЗАКАЗ</Button>
      </div>
    </div>
  );
}

export default ImgCard;
