import React, { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.scss";
import ToggleButton from "react-toggle-button";

function ThemeToggle({ setTheme }) {
  const [toggleState, setToggleState] = useState(false);

  const handleThemeChange = (event) => {
    setToggleState(!toggleState);
  };
  useEffect(() => {
    setTheme(!toggleState);
  }, [setTheme, toggleState]);

  return (
    <div>
      <div className={styles.sronly}>
        <p>
          The current theme of the webpage is
          {toggleState ? "dark mode" : "light mode"}
        </p>
      </div>
      <ToggleButton
        // size="large"
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
        onToggle={handleThemeChange}
        containerStyle={{ display: "inline-block", width: "100px" }}
        trackStyle={{ width: "100px", height: "30px" }}
        thumbAnimateRange={[1, 80]}
        activeLabelStyle={{ fontSize: "10px" }}
        inactiveLabelStyle={{ fontSize: "10px" }}
      />
    </div>
  );
}

export default ThemeToggle;
