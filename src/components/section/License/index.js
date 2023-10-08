import Title from "../../Title";
import styles from "./index.module.scss";
import LicenseImg from "../../../img/license.svg";
import Subtitle from "../../Subtitle";
const data = [
  {
    id: 1,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
  {
    id: 2,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
  {
    id: 3,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
  {
    id: 4,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
  {
    id: 5,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
  {
    id: 6,
    licenseImg: LicenseImg,
    licenseTitle: "Официальный дистрибьютор материалов марки ELF (Frame 22)",
  },
];

function License() {
  return (
    <div className={styles.license}>
      <Title outline>ЛИЦЕНЗИИ</Title>
      <div className={styles.wrapper}>
        {data.map(({ id, licenseImg, licenseTitle }) => (
          <div className={styles["license-item"]}>
            <img src={licenseImg} alt="" />
            <Subtitle>{licenseTitle}</Subtitle>
          </div>
        ))}
      </div>
    </div>
  );
}

export default License;
