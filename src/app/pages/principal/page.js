"use client";
import styles from "../../../../styles/principal.module.scss";
import InText from "../../components/commons/inText";
import Slider from "../../components/containers/slider";
import { useRef } from "react";
// import { getAllpublications } from "../../utils/publication";
const Principal = () => {
  const InTextChild = useRef();
  const changueTile = ({ font, title }) => {
    if (font && title) {
      InTextChild.current.callFnHandleChangue({ font: font, title: title });
      useswr;
    }
  };
  // const handleFullScreenMode = () => {
  //   document.documentElement.requestFullscreen();
  // };
  // const callPublications = () => {
  //   getAllpublications().then((result) => console.log(result));
  // };
  return (
    <div className={styles.container}>
      <div></div>
      <InText />
      <Slider
      // data={data}
      // changueTile={({ font, title }) => changueTile({ font, title })}
      />
    </div>
  );
};
export default Principal;
