import React, { useState } from "react";
import styles from "./ThemeToggle.module.scss";
import ToggleButton from "react-toggle-button";

function ThemeToggle() {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className={styles.ToggleBox}>
      <ToggleButton
        className={styles.Toggle}
        colors={{
          activeThumb: {
            base: "#e8e8a6",
          },
          inactiveThumb: {
            base: "#382933",
          },
          active: {
            base: "#519872",
            hover: "#3b5249",
          },
          inactive: {
            base: "#f2f5c8",
            hover: "#c1deae",
          },
        }}
        inactiveLabel={"🌞"}
        activeLabel={"🌛"}
        value={toggleState}
        onToggle={(toggleState) => {
          setToggleState(!toggleState);
        }}
      />
    </div>
  );
}

export default ThemeToggle;
