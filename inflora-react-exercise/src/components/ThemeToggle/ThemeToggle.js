import React, { useState, useEffect } from "react";
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
<<<<<<< HEAD:sass-exercise/src/components/ThemeToggle/ThemeToggle.js
      <ToggleButton
=======
      <div className={styles.sronly}>
        <p>
          The current theme of the webpage is
          {toggleState ? "dark mode" : "light mode"}
        </p>
      </div>
      <ToggleButton
        size="large"
>>>>>>> 60f53dc55aa8ac34f09aa342f40f3cc86d7db77d:inflora-react-exercise/src/components/ThemeToggle/ThemeToggle.js
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
        trackStyle={{ width: "100px", height: "50px" }}
        thumbAnimateRange={[1, 80]}
        activeLabelStyle={{ fontSize: "30px" }}
        inactiveLabelStyle={{ fontSize: "30px" }}
      />
    </div>
  );
}

export default ThemeToggle;