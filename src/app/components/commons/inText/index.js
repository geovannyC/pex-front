import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./style.module.scss";

const titleStyle = {
  gotham: {
    fontFamily: "Gotham-Medium",
    letterSpacing: "6cqi",
    fontSize: "10cqi",
    marginRight: "-6cqi",
  },
  woodman: {
    fontFamily: "Woodman-HeavyPress",
    letterSpacing: "5cqi",
    fontSize: "10cqi",
    marginRight: "-15cqi",
  },
  jurassicpark: {
    fontFamily: "JurassicPark",
    letterSpacing: "5cqi",
    fontSize: "10cqi",
    marginRight: "-5cqi",
  },
  damion: {
    fontFamily: "Damion-regular",
    letterSpacing: "5cqi",
    fontSize: "10cqi",
    marginRight: "-5cqi",
  },
  nasalization: {
    fontFamily: "Nasalization",
    letterSpacing: "7cqi",
    fontSize: "12cqi",
  },
  nemo: {
    fontFamily: "Nemo",
    letterSpacing: "10cqi",
    fontSize: "10cqi",
    marginRight: "-10cqi",
  },
  fear: {
    fontFamily: "Fear",
    letterSpacing: "2cqi",
    fontSize: "8cqi",
    marginRight: "-5cqi",
  },
  dino: {
    fontFamily: "Dino",
    letterSpacing: "5cqi",
    fontSize: "5cqi",
    marginRight: "-5cqi",
  },
  gutesWetter: {
    fontFamily: "GutesWetter",
    letterSpacing: "10cqi",
    fontSize: "10cqi",
    marginRight: "-10cqi",
  },
};
// eslint-disable-next-line react/display-name
const InText = forwardRef((props, ref) => {
  const [data, setData] = useState({
    loading: false,
    txt: {
      title: "",
      font: "gotham",
    },
  });
  useImperativeHandle(ref, () => ({
    callFnHandleChangue({ font, title }) {
      setData({ ...data, loading: true });
      setTimeout(() => {
        setData({
          // ...data,
          loading: false,
          txt: {
            font: font,
            title: title,
          },
        });
        console.log(props)
      }, 300);
    },
  }));
  return (
    <div
      className={`${styles.containerTitle} ${
        data.loading && styles.containerLoading
      }`}
    >
      <h1 style={titleStyle[data?.txt?.font]}>{data?.txt?.title}</h1>
    </div>
  );
});

export default InText;
