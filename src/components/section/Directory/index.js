import ImgCard from "../../ImgCard";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import styles from "./index.module.scss";
import {getData} from "../../../services/useApi"
import { PRODUCT } from "../../../store/axios";
import { useQuery } from "react-query";
import Loader from "../../Loader";

function Directory({ title, subtitle }) {
  async function category(){ 
    const data = await getData(PRODUCT.category)
    return await data.data.categories
     }

   const {isLoading,data}=useQuery("data",category)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_sector}>
        <Title margin="0 0 3rem 0" textAlign="center" outline>
          {title}
        </Title>
        <Subtitle uppercase={true}>{subtitle}</Subtitle>
      </div>
      <div className={styles.directory}>
        {isLoading?<Loader/>:
        data?.map(({ _id, image, title }) => (
          <ImgCard key={_id} imgUrl={image} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
