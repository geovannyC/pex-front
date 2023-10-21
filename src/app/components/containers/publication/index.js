import React, { useState } from "react";
import Image from "next/image";

import styles from "./style.module.scss";
import Card from "../../commons/card";
import ObjAppears from "../../commons/ObjAppears";
import Contact from "../Contact";

const Publication = ({ active, publication }) => {
  const [imageColorPicker, setImageColorPicker] = useState(
    publication?.images[0]
  );
  const handleChangueColor = ({ color }) => {
    if (color.id !== imageColorPicker.idColor) {
      const result = publication?.images.find(
        (image) => image.idColor === color.id
      );
      setImageColorPicker(result);
    }
  };
  return (
    <div
      className={`${styles.containerSlider} ${
        active && styles.containerSliderActive
      }`}
    >
      <div className={styles.contact}>
        <Contact active={active} />
      </div>
      <Card stylesParent={styles.price}>
        <ObjAppears active={active} delay={800}>
          <h3>{`$ ${publication.price}`}</h3>
        </ObjAppears>
      </Card>
      <Card stylesParent={styles.description} glass>
        <div className={styles.textContainer}>
          <ObjAppears active={active} delay={400} parentStyles={styles.char}>
            <li>2.20m</li>
            <li>1.5m - 2.0m</li>
            <li>Poliuretano</li>
          </ObjAppears>
          <div className={styles.colorsComponent}>
            {publication?.availableColors.map((color) => (
              <div
                style={{ backgroundColor: color?.color }}
                className={styles.color}
                onClick={() => handleChangueColor({ color: color })}
                key={color.id}
              />
            ))}
          </div>
        </div>
        <div className={styles.image2}>
          <Image
            src={imageColorPicker?.image || publication?.images[0].image}
            fill
            alt="test"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Card>
    </div>
  );
};

export default Publication;
