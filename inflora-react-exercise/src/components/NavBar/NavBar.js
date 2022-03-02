import React from "react";
import styles from "./NavBar.module.scss";
import ThemeToggle from "../ThemeToggle";

function Navbar({ isDarkTheme, setTheme }) {
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`${styles.NavBarContainer} ${
        styles[`NavBarContainer--${theme}`]
      }`}
    >
      <ul className={styles.NavigationLinks}>
        <li>
          <a className={`${styles.Link} ${styles[`Link--${theme}`]}`} href="./">
            News
          </a>
        </li>
        <li>
          <a className={`${styles.Link} ${styles[`Link--${theme}`]}`} href="./">
            Community
          </a>
        </li>
        <li>
          <a className={`${styles.Link} ${styles[`Link--${theme}`]}`} href="./">
            Contact
          </a>
        </li>
        <li>
          <a className={`${styles.Link} ${styles[`Link--${theme}`]}`} href="./">
            Login
          </a>
        </li>
      </ul>

      <div className={styles.ToggleButton}>
        <ThemeToggle setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Navbar;
