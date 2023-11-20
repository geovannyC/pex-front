import React from "react";

import { contactData } from "./data";
import HandleSelectType from "../LinkedIcon";

import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2>Copyright © 2023 PlanetExpress.Inc.EC. All Rights Reserved</h2>
      <div className={styles.socialContainer}>
        {contactData.map((data) => (
          <HandleSelectType data={data} key={data.id} parentStyles={styles.icon} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
