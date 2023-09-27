import ImgCard from "../../ImgCard";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import styles from "./index.module.scss";
function Directory({ data, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <Title outline>{title}</Title>
      <Subtitle align="left">{subtitle}</Subtitle>
      <div className={styles.directory}>
        {data?.map(({ id, imgUrl, title }) => (
          <ImgCard key={id} imgUrl={imgUrl} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
