import styles from "./index.module.scss";

function PartnersCard({ img, text }) {
  return (
    <li className={styles.news__item}>
      <img src={img} alt={`partner-img-${text}`}></img>
      <p className={styles.news__text}>{text}</p>
    </li>
  );
}

export default PartnersCard;
