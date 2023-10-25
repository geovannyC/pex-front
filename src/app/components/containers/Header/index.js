import React from "react";
import styles from "./style.module.scss";
import logo from "../../../../../public/logo3.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          priority
          src={logo}
          alt="Follow us on Twitter"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h2>Planet Express EC</h2>
    </div>
  );
};

export default Header;
