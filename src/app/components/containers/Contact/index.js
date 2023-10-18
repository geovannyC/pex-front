import React, { useEffect, useState } from "react";
import { dataContact } from "./data";

import Card from "../../commons/card";
import ObjAppears from "../../commons/ObjAppears";

import styles from "./style.module.scss";

const Contact = ({ active }) => {
  const [state, setState] = useState(active);
  const handleOpenMenuToggle = (nwState) => {
    setState(nwState);
  };
  useEffect(() => {
    if (!active) handleOpenMenuToggle(false);
  }, [active]);

  const handleSelectType = ({ data = {} }) => {
    if (data.type === "redirect")
      return (
        <li
          key={data.id}
          onClick={() => window.open(data.url)}
          style={{ cursor: "pointer" }}
        >
          {data.txt}
        </li>
      );
    if (data.type === "wsp")
      return (
        <li
          key={data.id}
          onClick={() => window.open(data.url)}
          style={{ cursor: "pointer" }}
        >
          {data.txt}
        </li>
      );
    return <li key={data.id}>{data.txt}</li>;
  };
  return (
    <div>
      <Card
        stylesParent={`${styles.container} ${
          active && styles.containerActive
        } ${state && active ? styles.actived : styles.unactived} `}
        hover={state && active}
        onclick={() => handleOpenMenuToggle(!state)}
      >
        <h3>Contactar</h3>
        <Card stylesParent={styles.contactCard} glass>
          <ObjAppears
            active={state}
            delay={600}
            parentStyles={styles.textContaainer}
          >
            {dataContact.map((data) => handleSelectType({ data: data }))}
          </ObjAppears>
        </Card>
      </Card>
    </div>
  );
};

export default Contact;
