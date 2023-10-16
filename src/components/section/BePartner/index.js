import PartnersCard from "../../PartnersCard";
import Title from "../../Title";
import styles from "./index.module.scss";
import PartComp from "../../../img/ПартКом1.png";
import Button from "../../Button";

const partnersDate = [
  { id: 1, img: PartComp, text: "Компания «ПартКом»" },
  { id: 2, img: PartComp, text: "Компания «ПартКом»" },
  { id: 3, img: PartComp, text: "Компания «ПартКом»" },
  { id: 4, img: PartComp, text: "Компания «ПартКом»" },
  { id: 5, img: PartComp, text: "Компания «ПартКом»" },
  { id: 6, img: PartComp, text: "Компания «ПартКом»" },
];
function BePartner() {
  return (
    <div className={styles.bePartner}>
      <div className="container">
        <Title color="white" outline>
          ПАРТНЕРЫ
        </Title>
        <div className={styles.wrapper}>
          {partnersDate.map(({ id, img, text }) => (
            <PartnersCard key={id} img={img} text={text} />
          ))}
        </div>
      </div>
      <Button margin="2rem 0">СТАТЬ ПАРТНЕРОМ</Button>
    </div>
  );
}

export default BePartner;
