import ImgCard from "../../ImgCard";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import styles from "./index.module.scss";
function Directory({ data, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_sector}>
        <Title margin="0 0 3rem 0" textAlign="center" outline>
          {title}
        </Title>
        <Subtitle uppercase={true}>{subtitle}</Subtitle>
      </div>
      <div className={styles.directory}>
        {data?.categories?.map(({ _id, image, title ,url}) => (
          <ImgCard key={_id} imgUrl={image} title={title} dataId={_id} PageUrl={data.url}/>
        ))}
      </div>
    </div>
  );
}

export default Directory;
