import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from  '../../Button'
import styles from "./index.module.scss";

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
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade"
      >
        {data.map(({ id, title, buttonTitle, bgImg }) => (
          <SwiperSlide style={{backgroundImage: `url(${bgImg})`, position:"relative"}}
            key={id}>
              <div className={styles.showcase__wrapper}>
                <div className="container">
                <div className={styles["showcase-item"]}>
              <img src={notFoundImg} alt="" />
              <Title fontStyle="italic" maxWidth="586px" size="4.8rem" text={subtitle} margin={titleMargin} textAlign="left" color="#fff" children={title} /> 
               <div className={styles.showcase__button}><Button style={{color:"#fff"}} value="ПЕРЕЙТИ В КАТАЛОГ" />
               </div>
                </div>
            </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Showcase;
