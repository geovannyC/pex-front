import React, { useEffect, useState } from "react";
import { dataContact } from "./data";

import Card from "../../commons/card";
import ObjAppears from "../../commons/ObjAppears";
import HandleSelectType from "../LinkedIcon";
import DinamicIcons from "../../commons/dinamicIcons";

import styles from "./style.module.scss";

const Contact = ({ active, publication }) => {
  const [state, setState] = useState(false);
  const handleOpenMenuToggle = (nwState) => {
    setState(nwState);
  };
  useEffect(() => {
    if (!active) handleOpenMenuToggle(false);
  }, [active]);


  const ListDetail = ({ data }) => (
    <li key={data.id} className={styles.listDetail}>
      <div className={styles.icon}>
        <DinamicIcons library={data.icon?.library} tag={data.icon?.tag} />
      </div>
      {data.txt}
    </li>
  );
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
        {active && (
          <Card stylesParent={styles.contactCard} glass>
            <ObjAppears
              active={state}
              delay={600}
              parentStyles={styles.textContaainer}
            >
              {dataContact.map((data) => (
                <ListDetail key={data.id} data={data} />
              ))}
              <div className={styles.socialContainer}>
                {publication.contactData.map((data) => (
                  <HandleSelectType data={data} key={data.id} />
                ))}
              </div>
            </ObjAppears>
            <small>*Selecciona una red social para contactarnos</small>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default Contact;
