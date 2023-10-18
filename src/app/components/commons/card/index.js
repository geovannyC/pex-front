import React from "react";
import styles from "./style.module.scss";

export const Card = ({ children, reflective, stylesParent, hover, onclick, glass, ref }) => {
  return (
    <div
      className={`${stylesParent} ${reflective && styles.reflective} ${
        styles.container
      } ${hover && styles.containerPressed} ${glass && styles.glass}`}
      onClick={onclick}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Card;
