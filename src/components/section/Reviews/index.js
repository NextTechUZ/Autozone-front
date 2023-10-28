import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";
import "./index.scss"
import Title from "../../Title";
import Subtitle from "../../Subtitle";
import Button from "../../Button";
function Reviews({ elemets, autoPlay, toShow }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: "500",
    fontSize:"1.6rem",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section style={{padding:"5rem"}} className="review">
      <div className="container">
        <div style={{width:"60%",margin:"auto"}}>
            <Title outline>ОТЗЫВЫ</Title>
            <Subtitle margin="2rem">Для нас ценно любое Ваше мнение.</Subtitle>
        </div>
        <Slider className={styles.reviews__wrapper} {...settings}>
          {
            elemets.map((el) => (
                <div key={el.id} className={styles.reviews__item}>
                        <div className={styles.info__img}>
                        </div>
                        <div>
                            <p className={styles.describe}>{el.describe}</p>
                            <div className={styles.outline}></div>
                        </div>
                        <p style={{fontWeight:"400",fontSize:"1.6rem"}}>{el.name}</p>
                        <p className={styles.describe}>{el.type}</p>
                </div>
            ))
          }
        </Slider>
        <Button color="var(--color-brand--1)" link="/ask-question">ОСТАВИТЬ СВОЙ ОТЗЫВ</Button>
      </div>
    </section>
  );
}
export default Reviews;
