import Button from "../Button";
import styles from "./index.module.scss";
function ImgCard({ imgUrl, title }) {

  return (
    <div className={styles["img-card"]}>
      <img className={styles.img} src={imgUrl ? `https://api.autozoneshop.uz/images/${imgUrl}` : "https://picsum.photos/id/264/174"} />
      <div className={styles.intro}>
            <h3 className={styles.img__title}>{title}</h3>
         <div className={styles.img__button}>
         <Button style={{color:"#fff"}} value="СДЕЛАТЬ ЗАКАЗ" />
         </div>
      </div>
    </div>
  );
}

export default ImgCard;
