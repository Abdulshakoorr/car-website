import React from "react";
import Card from "./Card";
import styles from "./Find.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import  Rectangle3  from "../../images/Rectangle 3.png";
import  Rectangle6  from "../../images/Rectangle 6.png";
import  Rectangle7  from "../../images/Rectangle 7.png";
import  Rectangle8  from "../../images/Rectangle 8.png";
import  Rectangle9  from "../../images/Rectangle 9.png";
import  Rectangle10  from "../../images/Rectangle 10.png";
import  Rectangle11  from "../../images/Rectangle 11.png";
import  Rectangle12  from "../../images/Rectangle 12.png";

const Find = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Find Best cars in the town</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
          Aliquam, itaque.
        </p>
      </div>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 320px
            340: {
              slidesPerView: 1,
              width: 200,
            },
            // when window width is >= 480px
            786: {
              slidesPerView: 3,
              width: 786,
            },
            // when window width is >= 640px
            1040: {
              slidesPerView: 5,
              width: 1040,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className={styles.swiper}>
            <Card
              image={Rectangle3}
              company="audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={Rectangle6}
              company="auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={Rectangle7}
              company="mercedes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={Rectangle8}
              company="chevrolet"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image= {Rectangle9}
              company="ferrari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image=  {Rectangle10}
              company="toyota"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image=  {Rectangle11}
              company="ford"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={Rectangle12.png}
              company="Bmw"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
