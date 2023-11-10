import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from  '../../Button'
import styles from "./index.module.scss";
import Subtitle from "../../Subtitle";

const buttonData={
  width:"168px",
  color:"#fff",
  backgroundColor:"transparent",
  value:"ПЕРЕЙТИ В КАТАЛОГ",
  link:"/",

}

function Showcase({ subtitle, notFoundImg, data, titleMargin }) {
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
              padding: "0 250px",
              backgroundImage: `url(${bgImg})`,
            }}
            key={id}
          >
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
              <Button prop={buttonData}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Showcase;
