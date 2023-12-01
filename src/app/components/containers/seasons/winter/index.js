import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const Snowflake = ({ id }) => {
  const [animation, setAnimation] = useState({
    animationDelay: "0s",
    fontSize: "10px",
  });

  const generateSnowflake = () => {
    const newDelay = `${(Math.random() * 16).toFixed(2)}s`;
    const newFontSize = `${Math.floor(Math.random() * 10) + 10}px`;
    setAnimation({ animationDelay: newDelay, fontSize: newFontSize });
  };
  useEffect(() => {
    generateSnowflake();
  }, []);
  const { animationDelay, fontSize } = animation;
  const style = { animationDelay, fontSize };
  return (
    <p className={styles.Snowflake} id={`item${id}`} style={style}>
      *
    </p>
  );
};
const Snow = () => {
  const arr = new Array(100).fill("");
  const snow = arr.map((el, i) => {
    return <Snowflake key={i} id={i} />;
  });
  return <div className={styles.container}>{snow}</div>;
};

export default Snow;
