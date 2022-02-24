import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo";
import Tree from "../../assets/images/Tree.png";

function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <Logo image={Tree} alt={"Logo of Inflora"} />
      <h1>Inflora</h1>
    </div>
  );
}

export default Header;
