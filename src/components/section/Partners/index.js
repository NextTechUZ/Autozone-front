import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.scss'
function Partners({elements,autoPlay,toShow}) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: toShow,
      slidesToScroll: 1,
      autoplay: autoPlay,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

    };
    return (
      <section className={styles.partners}>
        <div className="container">
        <Slider className={styles.partners__wrapper} {...settings}>
          {elements.map(el=><div key={el.id} className={styles.partners__item}>
            {el.name?<div className={styles["partners__item-element"]}>
              <div  className={styles["partners__img-wrapper"]}>
              <img className={styles["partners__img"]} width={el.width} height={el.height} src={el.img}></img>
              </div>
              <p className={styles["partners__item-element-text"]}>{el.text}</p>
              <p className={styles["partners__item-element-name"]}>{el.name}</p>
              <p className={styles["partners__item-element-info"]}>{el.clientInfo}</p>
            </div>:<img className={styles['partners__item-img']}  src={el.img} width={el.width} height={el.height}></img>}
          </div>)}
        </Slider>
      </div>
    </section>
  );
}
export default Partners;
