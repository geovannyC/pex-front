import React, { useState } from "react";
import Image from "next/image";

import Contact from "../Contact";
import DinamicIcons from "../../commons/dinamicIcons";
import Card from "../../commons/card";
import ObjAppears from "../../commons/ObjAppears";

import styles from "./style.module.scss";

const Publication = ({ active, publication }) => {
  const [imageColorPicker, setImageColorPicker] = useState(
    publication?.colors[0]
  );
  const handleChangueColor = ({ color }) => {
    if (color.id !== imageColorPicker.id) {
      return setImageColorPicker(color);
    }
  };

  return (
    <div
      className={`${styles.containerSlider} ${
        active && styles.containerSliderActive
      }`}
    >
      <div className={styles.contact}>
        <Contact active={active} publication={{ ...publication, colors: "" }} />
      </div>
      <Card stylesParent={styles.price}>
        <ObjAppears active={active} delay={800}>
          <h3>{`$ ${publication.price}`}</h3>
        </ObjAppears>
      </Card>
      <Card stylesParent={styles.description} glass>
        <div className={styles.textContainer}>
          <ObjAppears active={active} delay={400} parentStyles={styles.char}>
            {publication.data.map((char) => (
              <li>
                <DinamicIcons library={char.library} tag={char.tag} />
                {char.detail}
              </li>
            ))}
          </ObjAppears>
          <div className={styles.colorsComponent}>
            {publication?.colors.map((color) => (
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
            src={
              imageColorPicker?.profileImage ||
              publication?.colors[0].profileImage
            }
            width={380}
            height={380}
            alt="profileImage"
            loading="lazy"
            quality={0}
          />
        </div>
      </Card>
    </div>
  );
};

export default Publication;
