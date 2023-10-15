import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";
function Partners({ elemets, autoPlay, toShow }) {
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
          {elemets.map((el) => (
            <div key={el.id} className={styles.partners__item}>
              <img src={el.img} width={el.width} height={el.height}></img>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default Partners;
