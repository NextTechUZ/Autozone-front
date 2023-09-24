import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.scss'
function Partners() {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: "linear"

    };
    return (
      <section className={styles.partners}>
        <div className="container">
        <Slider className={styles.partners__wrapper} {...settings}>
          <div className={styles.partners__item}>   
              <img width="166" height="52" src={require('../../../img/partne1.png')}></img>
          </div>
          <div  className={styles.partners__item}>
        
              <img width="166" height="48" src={require('../../../img/partne2.png')}></img>
            
          </div>
          <div  className={styles.partners__item}>
       
              <img width="166" height="35" src={require('../../../img/partne3.png')}></img>
         
          </div>
          <div  className={styles.partners__item}>
   
              <img width="105" height="90" src={require('../../../img/partne5.png')}></img>
         
          </div>
          <div  className={styles.partners__item}>
          
              <img width="165" height="45" src={require('../../../img/partne4.png')}></img>
            
          </div>
          <div className={styles.partners__item}>
          
              <img width="166" height="52" src={require('../../../img/partne1.png')}></img>
            
          </div>
          <div  className={styles.partners__item}>
        
              <img width="166" height="48" src={require('../../../img/partne2.png')}></img>
           
          </div>
          <div  className={styles.partners__item}>
        
              <img width="166" height="35" src={require('../../../img/partne3.png')}></img>
          
          </div>
        </Slider>
        </div>
      </section>
    );
  
}
export default Partners