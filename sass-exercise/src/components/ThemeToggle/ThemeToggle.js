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
      <ToggleButton
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
      />
    </div>
  );
}

export default ThemeToggle;
