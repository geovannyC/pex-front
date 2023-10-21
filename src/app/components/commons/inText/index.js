import React, { forwardRef, useState, useEffect } from "react";
import styles from "./style.module.scss";
import { useAppSelector } from "@/redux/hooks";

// eslint-disable-next-line react/display-name
const InText = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);
  const text = useAppSelector((state) => state.appReducer.currentTextView);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [text]);
  return (
    <div
      className={`${styles.containerTitle} ${
        loading && styles.containerLoading
      }`}
    >
      <h1 style={text.font}>{text.title}</h1>
    </div>
  );
});

export default InText;
