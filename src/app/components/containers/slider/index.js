import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  handleChangueCurrentTextView,
  handleChangueStatesApp,
} from "@/redux/features/app";
import { EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gray1, gray2 } from "../../../app.module.scss";
import Publication from "../publication";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.scss";
import ContentLoader from "react-content-loader";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [...useAppSelector((state) => state.appReducer.data)];
  const loading = useAppSelector(
    (state) => state.appReducer.states.loadingSlider
  );
  const TextStyleData = {
    ...useAppSelector((state) => state.appReducer.textStyles),
  };
  const dispatch = useAppDispatch();
  const changueTitle = (index) => {
    dispatch(
      handleChangueCurrentTextView({
        font: TextStyleData[data[index].fontFamily],
        title: data[index].title,
      })
    );
    dispatch(
      handleChangueStatesApp({
        loadingSlider: false,
      })
    );
    setCurrentIndex(index);
  };
  const handleChangueTile = (e) => {
    const index = e.activeIndex;
    changueTitle(index);
  };
  useEffect(() => {
    changueTitle(0);
  }, []);
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
      modules={[EffectCoverflow, Mousewheel, Pagination]}
      className={styles.swiperContainer}
      onActiveIndexChange={handleChangueTile}
      mousewheel
      simulateTouch
      pagination={{
        clickable: true,
        bulletActiveClass: styles.swiperPaginationBulletActive,
      }}
    >
      {data?.map((publication, index) => (
        <SwiperSlide className={styles.slide} key={publication.id}>
          {loading ? (
            <ContentLoader
              viewBox="0 0 450 400"
              backgroundColor={gray1}
              foregroundColor={gray2}
            >
              <rect x="42" y="77" rx="10" ry="10" width="100%" height="100%" />
            </ContentLoader>
          ) : (
            <Publication
              active={index === currentIndex}
              publication={publication}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
