import Showcase from "../../components/section/Showcase";
import styles from "./index.module.scss";

import ShowcaseImg1 from "../../img/notfound.png";
import notfound from "../../img/404.svg";



const data = [
  {
    id: 1,
    bgImg: ShowcaseImg1,
    title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
];

function NotFoundPage() {
  return (
    <div className={styles["notfound"]}>
      <Showcase
        notFoundImg={notfound}
        subtitle="Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес."
        data={data}
      />
    </div>
  );
}

export default NotFoundPage;
