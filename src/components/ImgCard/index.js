import Button from "../Button";
import Subtitle from "../Subtitle";
import styles from "./index.module.scss";
function ImgCard({ imgUrl, title, dataId,PageUrl}) {
  return (
    <div className={styles["img-card"]}>
      <img className={styles.img} src={imgUrl} alt="" />
      <div className={styles.intro}>
        <Subtitle size="2.4rem" color="var(--color-white)" capitalize>
          {title}
        </Subtitle>
        <Button link={`/products?page=${PageUrl}&itemId=${dataId}`}>СДЕЛАТЬ ЗАКАЗ</Button>
      </div>
    </div>
  );
}

export default ImgCard;
