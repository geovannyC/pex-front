import React, { useEffect, useState } from "react";

import { EffectCoverflow, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Publication from "../publication";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.module.scss";

import styles from "./style.module.scss";

const Slider = ({ data = [], changueTile }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(() => {
    changueTile({ font: data[1].fontFamily, title: data[1].name });
  }, []);
  const handleChangueTile = (e) => {
    setCurrentIndex(e.activeIndex);
    changueTile({
      font: data[e.activeIndex].fontFamily,
      title: data[e.activeIndex].name,
    });
  };
  return (
    <Swiper
      effect={"coverflow"}
      direction="horizontal"
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        modifier: 1.5,
        depth: 100,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Mousewheel]}
      className={styles.swiperContainer}
      onActiveIndexChange={handleChangueTile}
      initialSlide={1}
      mousewheel
      simulateTouch
    >
      {data.map((publication, index) => (
        <SwiperSlide className={styles.slide} key={publication.id}>
          <Publication
            active={index === currentIndex}
            publication={publication}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
