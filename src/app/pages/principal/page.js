"use client";
import { useRef, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { handleChangueStatesApp } from "@/redux/features/app";

import InText from "../../components/commons/inText";
import Slider from "../../components/containers/slider";
import Header from "../../components/containers/Header";
import Footer from "../../components/containers/Footer";
import Winter from "../../components/containers/seasons/winter";

import styles from "../../../../styles/principal.module.scss";
// import { getAllpublications } from "../../utils/publication";
const Principal = () => {
  const InTextChild = useRef();
  const changueTile = ({ font, title }) => {
    if (font && title) {
      InTextChild.current.callFnHandleChangue({ font: font, title: title });
      useswr;
    }
  };
  const dispatch = useAppDispatch();
  const handleChangueLoading = () => {
    dispatch(
      handleChangueStatesApp({
        loading: false,
      })
    );
  };
  useEffect(() => {
    handleChangueLoading();
  }, []);
  // const handleFullScreenMode = () => {
  //   document.documentElement.requestFullscreen();
  // };
  // const callPublications = () => {
  //   getAllpublications().then((result) => console.log(result));
  // };
  return (
    <div className={styles.container}>
      <Winter />
      <Header />
      <InText />
      <Slider />
      <Footer />
    </div>
  );
};
export default Principal;
