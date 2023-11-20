import React from "react";
import styles from "./style.module.scss";
import DinamicIcons from "../../commons/dinamicIcons";
import { isMobile } from "react-device-detect";
const HandleSelectType = ({ data = {}, parentStyles }) => {
  if (data.type === "redirect")
    return (
      <span
        key={data.id}
        onClick={() => window.open(data.url)}
        style={{ cursor: "pointer" }}
        className={parentStyles || styles.icon}
      >
        <DinamicIcons library={data.icon?.library} tag={data.icon?.tag} />
      </span>
    );
  if (data.type === "wsp") {
    const webLink = "https://wa.me"
    const mobileLink = "whatsapp"
    const platformSerialized = isMobile?mobileLink:webLink;
    const urlSerialized = `${platformSerialized}://send/?phone=${data?.number}&text=${data?.text}`;

    return (
      <span
        key={data.id}
        onClick={() => window.open(urlSerialized)}
        style={{ cursor: "pointer" }}
        className={parentStyles || styles.icon}
      >
        <DinamicIcons library={data.icon?.library} tag={data.icon?.tag} />
      </span>
    );
  }
  return <span key={data.id}>{data.txt}</span>;
};

export default HandleSelectType;
