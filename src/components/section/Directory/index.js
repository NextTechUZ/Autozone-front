import ImgCard from "../../ImgCard";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import styles from "./index.module.scss";
function Directory({ data, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <Title textAlign="center" size="4.8rem" outline>
        {title}
      </Title>
      <Subtitle textAlign="right">{subtitle}</Subtitle>
      <div className={styles.directory}>
        {data?.map(({ id, imgUrl, title }) => (
          <ImgCard key={id} imgUrl={imgUrl} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
