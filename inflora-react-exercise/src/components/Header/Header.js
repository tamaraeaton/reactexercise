import React from "react";

import styles from "./Header.module.scss";
import Logo from "../Logo";
import Tree from "../../assets/images/Tree.png";

function Header({ isDarkTheme }) {
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`${styles.HeaderContainer} ${
        styles[`HeaderContainer--${theme}`]
      }`}
    >
      <Logo image={Tree} alt={"Logo of Inflora"} />
      <h1>Inflora</h1>
    </div>
  );
}

export default Header;
