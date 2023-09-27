import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./index.module.scss";

import ShowcaseImg1 from "../../../img/showcaseBg1.png";
import ShowcaseImg2 from "../../../img/showcaseBg2.png";
import ShowcaseImg3 from "../../../img/showcaseBg3.png";

const data = [
  {
    id: 1,
    bgImg: ShowcaseImg1,
    title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
  {
    id: 2,
    bgImg: ShowcaseImg2,
    title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
  {
    id: 3,
    bgImg: ShowcaseImg3,
    title: "БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
];

function Showcase() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
      >
        {data.map(({ id, title, buttonTitle, bgImg }) => (
          <SwiperSlide key={id}>
            <div
              style={{
                backgroundImage: `url(${bgImg})`,
              }}
              className={styles["showcase-item"]}
            >
              <Title textAlign="left" color="#fff">
                {title}
              </Title>
              <button>{buttonTitle}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Showcase;
