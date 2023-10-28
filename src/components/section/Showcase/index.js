import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./index.module.scss";
import Subtitle from "../../Subtitle";
import Button from "../../Button";

function Showcase({ subtitle, notFoundImg, data, titleMargin = "0 0 3rem" }) {
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
          <SwiperSlide
            style={{
              background: `url(${bgImg}) center`,
              backgroundSize: "cover",
            }}
            key={id}
          >
            <div className="container">
              <div className={styles["showcase-item"]}>
                <img src={notFoundImg} alt="" />
                <Title
                  fontStyle="italic"
                  maxWidth="550px"
                  size="4.8rem"
                  margin={titleMargin}
                  textAlign="left"
                  color="#fff"
                >
                  {title}
                </Title>
                {subtitle && (
                  <Subtitle maxWidth="60rem" textAlign="left" color="#fff">
                    {subtitle}
                  </Subtitle>
                )}
                <Button justifyContent="start" link="/category">{buttonTitle}</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Showcase;
