import React from "react";
import styles from "./NavBar.module.scss";
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.NavigationLinks}>
        <a href="./">Home</a>
        <a href="./">News</a>
        <a href="./">Community</a>
        <a href="./">Contact</a>
        <a href="./">Login</a>
      </div>
      <div className={styles.ToggleButton}>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
