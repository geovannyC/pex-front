import React, { useEffect } from "react";
import styles from "./style.module.scss";
const ObjAppears = ({ active, children, delay, parentStyles }) => {
  useEffect(() => {
    delay&&document.documentElement.style.setProperty("--delay", `${delay}ms`);
  }, [delay]);

  return (
    <div className={`${styles.container} ${active && styles.actived} ${parentStyles}`}>
      {children}
    </div>
  );
};

export default ObjAppears;
